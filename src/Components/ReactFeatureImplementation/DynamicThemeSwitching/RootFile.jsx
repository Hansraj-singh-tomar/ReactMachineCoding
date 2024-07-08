import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import ThemeWrapper from './ThemeWrapper';
import ThemeSwitcher from './ThemeSwitcher';
import './index.css';

const Root = () => (
    <ThemeProvider>
        <ThemeWrapper>
            <ThemeSwitcher />
            <App />
        </ThemeWrapper>
    </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
