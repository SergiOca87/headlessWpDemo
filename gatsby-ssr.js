import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { PropertiesProvider } from './src/context/PropertiesContext';
// highlight-start
export const wrapRootElement = ({ element }) => (
    <PropertiesProvider>
        <ParallaxProvider>{element}</ParallaxProvider>
    </PropertiesProvider>
);
// highlight-end