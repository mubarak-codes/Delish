import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


let queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <App />
   </QueryClientProvider>
  </StrictMode>,
)
