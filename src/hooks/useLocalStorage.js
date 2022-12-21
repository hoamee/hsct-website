import { useState, useEffect } from 'react';

// ==============================|| CONFIG - LOCAL STORAGE ||============================== //

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        return {
            "fontFamily": "Roboto",
            "borderRadius": 8,
            "outlinedFilled": true,
            "navType": "light",
            "presetColor": "theme2",
            "locale": "en",
            "rtlLayout": false,
            "container": false
        };
    });

    useEffect(() => {
        const listener = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue({
                    fontFamily: 'Roboto',
                    borderRadius: 8,
                    outlinedFilled: true,
                    navType: 'light',
                    presetColor: 'theme2',
                    locale: 'en',
                    rtlLayout: false,
                    container: false
                });
            }
        };
        window.addEventListener('storage', listener);

        return () => {
            window.removeEventListener('storage', listener);
        };
    }, [key, defaultValue]);

    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };

    return [value, setValueInLocalStorage];
}
