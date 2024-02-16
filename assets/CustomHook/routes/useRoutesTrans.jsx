import { useEffect, useState } from "react";
import { apiFetch } from "../../functions/api";
import i18n from "../../entrypoints/i18n";

export const useRoutesTrans = (transKey) => {
    const [navRoutes, setNavRoutes] = useState(null);
    const [basePath, setBasePath] = useState(null);
    
    const doFetch = async () => {
        let routes = await apiFetch('/locales/'+i18n.language+'/routes.json');
        const keyParts = transKey.split('.');
        for(const keyPart of keyParts) {
            routes = routes[keyPart];
        }
        setBasePath(routes.base.path);
        delete routes.base;
        setNavRoutes(routes);
    }
    useEffect(() => {
        doFetch();
    }, []);

    return [navRoutes, basePath];
}