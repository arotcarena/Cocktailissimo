import { useEffect } from "react";
import { Security } from "../../../Config/Security";
import { useProgressiveSteps } from "./useProgressiveSteps";

/**
 * LES STEPS DOIVENT ETRE DES NUMBER
 * @param {number} initialStep
 * @param {string} storageKey (la clef qui sera utilisée pour stocker step et maxStep dans sessionStorage) 
 * @returns {{step: number, selectStep, forceStep, forwardStep}} selectStep change la step mais pas maxStep, forceStep donne la valeur à step et maxStep
 */
export const useProgressiveStepsWithStorage = (initialStep, storageKey) => {
    const {step, maxStep, setStep, setMaxStep, selectStep, forceStep, forwardStep} = useProgressiveSteps(initialStep);

    //au chargement de la page on cherche si un step est présent dans sessionStorage
    useEffect(() => {
        if(window.sessionStorage.getItem(storageKey))  {
            const data = Security.decryptToObject(window.sessionStorage.getItem(storageKey));
            setStep(data.step);
            setMaxStep(data.maxStep);
        }
    }, []);

    //à chaque changement de step on persiste dans sessionStorage
    useEffect(() => {
        window.sessionStorage.setItem(storageKey, Security.encryptFromObject({step: step, maxStep: maxStep}));            
    }, [step]);

    return {step, selectStep, forceStep, forwardStep};
}