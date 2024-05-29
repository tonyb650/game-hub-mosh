// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// libraries
import { ChakraProvider } from '@chakra-ui/react'
// imports
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)


