import { useEffect, useState } from "react";
import { Security } from "../Config/Security";

export const useGetUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const lightUser = sessionStorage.getItem('light_user');
            if(lightUser) {
                if(lightUser === 'false') {
                    setUser(false);
                } else {
                    setUser(
                        Security.decryptToObject(sessionStorage.getItem('light_user'))
                    );
                }
                clearInterval(interval);
            }

        }, 300);
        return () => clearInterval(interval);
    }, []);

    const updateUser = () => {
        const lightUser = sessionStorage.getItem('light_user');
        if(lightUser) {
            if(lightUser === 'false') {
                setUser(false);
            } else {
                setUser(
                    Security.decryptToObject(sessionStorage.getItem('light_user'))
                );
            }
        }
    };

    return {user, updateUser};
}