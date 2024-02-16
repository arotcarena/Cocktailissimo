import i18n from "../entrypoints/i18n";
import { apiFetch } from "./api";

export const redirectToLogin = async (targetPath, message, onError = null) => {
    //on demande à l'api de mettre dans la session _security.target_path et de nous renvoyer l'url de login
    try {
        const loginPath = await apiFetch('/'+i18n.language+'/api/security/prepareLogin', {
            method: 'POST',
            body: JSON.stringify({
                targetPath: targetPath,
                message: message
            })
        });
        //on envoie vers page login
        location = loginPath;
    } catch(e) {
        if(onError) {
            onError();
        }
    }
}