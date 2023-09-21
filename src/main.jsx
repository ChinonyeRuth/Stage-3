import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-fnsqtkl8xwybb7gz.us.auth0.com"
    clientId="gnQIPgA0sy4dUkQ3SlDbTMLhkZM0FcqA"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
)
