import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Component/Layout.jsx'
import store from './Redux/Store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
)
