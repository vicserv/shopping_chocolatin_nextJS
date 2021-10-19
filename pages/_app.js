import Layout from '../components/Layout'
import '../styles/globals.scss'
import {TiendaContextProvider} from '../context/TiendaContext'

function MyApp({ Component, pageProps }) {
  return (
    <TiendaContextProvider>

    <Layout>

      <Component {...pageProps} />

    </Layout>
    
    </TiendaContextProvider>
  )
}

export default MyApp
