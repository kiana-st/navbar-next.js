import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <contant className={styles.container}>
        <Component {...pageProps} />
      </contant>
    </Layout>
  )
}

export default MyApp
