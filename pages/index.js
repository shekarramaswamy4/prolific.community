import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>prolific</title>
        <meta name="description" content="prolific.community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          prolific
        </h1>
        <p className={styles.description}> 
            We are a community of builders just tinkering with stuff. Join us to learn cool things and meet dope people!
        </p>

        <div className={styles.projects}>
          <div className={styles.project}>
          <a href="https://github.com/shekarramaswamy4/prolific.community">
            <h2>9.3.2021: prolific.community</h2>
          </a>
          <p>An attempt at web development.</p>
          <p>shekar || next.js, vercel</p>
          </div>
        </div>

        <div className={styles.projects}>
          <div className={styles.project}>
          <a href="https://github.com/shekarramaswamy4/phishing">
            <h2>9.25.2021: privacy extension</h2>
          </a>
          <p>Highlight sketchy links in gmail, block FB ads (for some people)</p>
          <p>shekar || typescript, chrome extension</p>
          </div>
        </div>

      </main>

    <footer>
        <p>Want to join? Email shekar@ramaswamy.org!</p>
    </footer>
    </div>
  )
}
