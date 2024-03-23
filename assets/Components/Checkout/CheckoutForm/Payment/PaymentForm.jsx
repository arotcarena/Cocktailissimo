import React, { useContext, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import '../../../../styles/Checkout/paymentForm.css';
import { ApiError, apiPreparedFetch } from "../../../../functions/api";
import { Loader } from "../../../../UI/Icon/Loader";
import { priceFormater } from "../../../../functions/formaters";
import { CheckIcon } from "../../../../UI/Icon/CheckIcon";
import { useTranslation } from "react-i18next";
import { SiteConfig } from "../../../../Config/SiteConfig";
import { CheckoutContext } from "../..";


export const PaymentForm = ({piSecret}) => {
  const {t, i18n} = useTranslation('messages');

  const {data: checkoutData} = useContext(CheckoutContext);

  const stripe = useStripe();
  const elements = useElements();
  const [errors, setErrors] = useState(null);
  //inutile voir ci-dessous
  // const [message, setMessage] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  //agreeCGV
  const [agreeCGV, setAgreeCGV] = useState(false);
  const [agreeCGVError, setAgreeCGVError] = useState(false);
  const handleAgreeCGVChange = e => {
    setAgreeCGV(agreeCGV => !agreeCGV);
  }
  useEffect(() => {
    if(agreeCGV && agreeCGVError) {
      setAgreeCGVError(false);
    }
  }, [agreeCGV]);

  //INUTILE CAR JE FAIS UNE REDIRECTION DONC CES MESSAGES NE SERONT PAS AFFICHES 
  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Paiement réussi !");
  //         break;
  //       case "processing":
  //         setMessage("Paiement en cours. Veuillez rester sur cette page");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Votre paiement a échoué, veuillez recommencer.");
  //         break;
  //       default:
  //         setMessage("Quelque chose n\'a pas fonctionné.");
  //         break;
  //     }
  //   });
  // }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isLoading) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    if(!agreeCGV) {
      setAgreeCGVError(true);
      return;
    }

    setErrors(null);
    setIsLoading(true);

    //createPurchase : 
    // on vérifie le stock (s'il est insuffisant ça renvoie une erreur mais avant on met à jour le cart et la purchase) 
    // et si on a pas déjà payé cette purchase
    try {
      await apiPreparedFetch('/'+ i18n.language +'/api/checkout/createPurchase', {
        piSecret: piSecret, 
        checkoutData: checkoutData
      }, 'POST'
      );
    } catch(e) {
      if(e instanceof ApiError) {
        if(e.errors.target) {
          window.location.href = e.errors.target;
        } else {
          setErrors(e.errors);
        } 
      } else {
        setErrors([t('error.invalid_form')]);
      }
      setIsLoading(false);
      return;
    }

    //tentative de paiement
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: (SiteConfig.SITE_URL + t('url.checkout.payment_success', {ns: 'urls'}))
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setErrors([error.message]);
    } else {
      setErrors([t('error.payment_failure')]);
    }

    setIsLoading(false);
  };


  const paymentElementOptions = {
    layout: "tabs"
  }


  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className={'checkbox-group' + (agreeCGVError ? ' is-invalid': '')}>
          <input className="form-checkbox" id="checkboxRememberMe" type="checkbox" name="agreeCGV" onChange={handleAgreeCGVChange} />
          <label htmlFor="checkboxRememberMe" className="form-label">
              <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                  <CheckIcon />
              </div>
              <span id="checkbox-label">{t('agree_terms_of_sales')}</span>
          </label>
          {
            agreeCGVError && <div className="form-error">{t('assert.checkbox.true', {ns: 'constraints'})}</div>
          }
      </div>
      <button className={'form-button bordeaux pay-button' + (isLoading || !stripe || !elements ? ' disabled': '')} disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {
            isLoading 
            ?
            <>
              <Loader />
              <span className="no-opacity">{t('info.processing_payment')}</span>
            </>
            :
            <span>
                {t('pay')} {checkoutData.totalPrice ? priceFormater(checkoutData.totalPrice.priceToPay): ''}
            </span>
          }
        </span>
      </button>
      {/* Show any error or success messages */}
      {
        errors && (
          <div classname="info-group">
            <div className="form-error">{t('error.invalid_form')}</div>
          </div>
          // <div className="info-group">
          //   {
          //     // Les erreurs renvoyées par ApiCheckoutController.createPurchase ont : 
          //     //  - soit une clef "main" pour un message général d'erreur
          //     //  - soit les clefs des champs du formulaire avec le message d'erreur en valeur
          //   }
          //   {
          //     errors.main && <div className="form-error">{errors.main}</div>
          //   }
          //   {
          //     !errors.main && Object.entries(errors).map(([key, message]) => <div key={key} className="form-error">{key}: {message}</div>)
          //   }
          // </div>
        )
      }
    </form>
  );
}