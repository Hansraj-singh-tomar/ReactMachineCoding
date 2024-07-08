import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeWrapper = ({ children }) => {
    const { theme } = useTheme();

    return <div className={`theme-${theme}`}>{children}</div>;
};

export default ThemeWrapper;
