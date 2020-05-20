import '../styles/global.css'
import ExtLink from '../components/ext-link'
import Footer from '../components/footer'
export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
