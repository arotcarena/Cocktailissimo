import { useState } from "react";

/**
 * LES STEPS DOIVENT ETRE DES NUMBER
 * @param {number} initialStep 
 */
export const useProgressiveSteps = (initialStep) => {
    const [step, setStep] = useState(initialStep);
    const [maxStep, setMaxStep] = useState(initialStep);


    const forwardStep = () => {
        const nextStep = step + 1;
        if(maxStep > nextStep) {
            setStep(maxStep);
        } else {
            setStep(nextStep);
            setMaxStep(nextStep);
        }
    }

    /**
     * @param {number} selectedStep 
     */
    const selectStep = (selectedStep) => {
        if(selectedStep > maxStep) {
            setMaxStep(selectedStep);
        }
        setStep(selectedStep);
    }

    /**
     * @param {number} forceStep 
     */
    const forceStep = (forceStep) => {
        setStep(forceStep);
        setMaxStep(forceStep);
    }


    return {step, maxStep, setStep, setMaxStep, selectStep, forceStep, forwardStep};
}