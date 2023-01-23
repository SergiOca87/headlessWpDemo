import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapPageElement = ({ element, props }) => {
    return <ParallaxProvider>{element}</ParallaxProvider>;
};

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    );
    if (answer === true) {
        window.location.reload();
    }
};