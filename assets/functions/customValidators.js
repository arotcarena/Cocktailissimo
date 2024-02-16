import { Countries } from "../Config/Countries"

/**
 * 
 * @param {Object} proRegisterFormData 
 * @returns {boolean}
 */
export const vatNumberRequiredValidator = proRegisterFormData => {
    if(Countries.EU_ISO.includes(proRegisterFormData.iso)) {
        if(proRegisterFormData.vatNumber === '' || proRegisterFormData.vatNumber === null)
        {
            return false;
        }
    }
    return true;
}