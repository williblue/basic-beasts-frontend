import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Beasts</title>
        <meta name="description" content="Basic Beasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/#">Basic Beasts!</a>
        </h1>

        <p className={styles.description}>
          Brought to you by the Delta variant
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/basicbeastsnft"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow our Twitter
        </a>
      </footer>
    </div>
  )
}

export default Home
