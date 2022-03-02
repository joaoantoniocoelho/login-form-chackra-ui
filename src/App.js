import React from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset} from '@chakra-ui/core'
import {ThemeToggler} from './components/ThemeToggler.js'
import { LoginForm } from './pages/LoginForm.js';

export function App() {
  return(
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <LoginForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}