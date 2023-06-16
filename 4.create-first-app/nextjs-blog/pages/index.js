import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Next.js]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <h2>
        <Link href="/posts/first-post">first</Link>
      </h2>
      <footer>
        Powered by {<Image src='/vercel.svg' alt="logo" width={144} height={144}></Image>}
      </footer>
    </Layout>
  )
}