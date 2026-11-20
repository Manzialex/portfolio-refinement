import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
    <App />
    </MantineProvider>
  </StrictMode>,
)
