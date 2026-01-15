import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeContextProvider} from './context/themeContext.jsx'
import {AuthContextProvider} from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>
);
