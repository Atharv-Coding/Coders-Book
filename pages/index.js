import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org"> the Coders Book!</a>
        </h1>

        <p className={styles.description}>
          Your one and only destination for learning computer science.
        </p>

        <div className={styles.grid}>
          <div  className={styles.card}>
            <h2>Learn Javascript! &rarr;</h2>
            <p>Learn all the important concepts of Javascript in-depth with Projects and some tips.</p>
          </div>

          <div  className={styles.card}>
            <h2>Top Powershell Tips &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div className={styles.card}>
            <h2>Learn Python in 2022! &rarr;</h2>
            <p>Learn all the important concepts of Python in-depth with Projects and some tips..</p>
          </div>

          <div className={styles.card}>
            <h2>What are the Best Coding Websites! &rarr;</h2>
            <p>
              The Best Coding Websites which will help you in your journey of coding.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
