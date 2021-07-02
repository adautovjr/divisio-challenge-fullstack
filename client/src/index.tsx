import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react'
import store from './config/store'
import { Provider as ReduxProvider } from 'react-redux'
import client from './config/apollo-client'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
