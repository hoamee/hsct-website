import PropTypes from 'prop-types';
import { createContext } from 'react';

// project import
import defaultConfig from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// initial state
const initialState = {
    ...defaultConfig,
    onChangeMenuType: () => {},
    onChangePresetColor: () => {},
    onChangeLocale: () => {},
    onChangeRTL: () => {},
    onChangeContainer: () => {},
    onChangeFontFamily: () => {},
    onChangeBorderRadius: () => {},
    onChangeOutlinedField: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
    const [config, setConfig] = useLocalStorage('berry-config', {
        fontFamily: "Roboto",
        borderRadius: 8,
        outlinedFilled: true,
        navType: "light",
        presetColor: "theme2",
        locale: "en",
        rtlLayout: false
    });

    console.log(config);

    const onChangeMenuType = (navType) => {
        setConfig({
            ...config,
            navType
        });
    };

    const onChangePresetColor = (presetColor) => {
        setConfig({
            ...config,
            presetColor
        });
    };

    const onChangeLocale = (locale) => {
        setConfig({
            ...config,
            locale
        });
    };

    const onChangeRTL = (rtlLayout) => {
        setConfig({
            ...config,
            rtlLayout
        });
    };

    const onChangeContainer = () => {
        setConfig({
            ...config,
            container: !config.container
        });
    };

    const onChangeFontFamily = (fontFamily) => {
        setConfig({
            ...config,
            fontFamily
        });
    };

    const onChangeBorderRadius = (event, newValue) => {
        setConfig({
            ...config,
            borderRadius: newValue
        });
    };

    const onChangeOutlinedField = (outlinedFilled) => {
        setConfig({
            ...config,
            outlinedFilled
        });
    };

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onChangeMenuType,
                onChangePresetColor,
                onChangeLocale,
                onChangeRTL,
                onChangeContainer,
                onChangeFontFamily,
                onChangeBorderRadius,
                onChangeOutlinedField
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

ConfigProvider.propTypes = {
    children: PropTypes.node
};

export { ConfigProvider, ConfigContext };
