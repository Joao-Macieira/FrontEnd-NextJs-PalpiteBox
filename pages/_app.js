import Layout from '../components/layout'
import '../css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
