import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { PropertiesProvider } from './src/context/PropertiesContext';

export const wrapRootElement = ({ element }) => (
    <PropertiesProvider>
        <ParallaxProvider>{element}</ParallaxProvider>
    </PropertiesProvider>
);

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    );
    if (answer === true) {
        window.location.reload();
    }
};