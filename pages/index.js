import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOOSE ~ Time Banking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>MOOSE!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>MOOSE, 2021</p>
      </footer>
    </div>
  )
}
