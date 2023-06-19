import Head from 'next/head'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
}

interface Post {
  id: string;
  date: string;
  title: string;
}

export default function Home({ allPostsData }) {
  return (
    <main>
      <Head >
        <title>learn Next.js: fetch data</title>
      </Head>
      <h1>learn Next.js: fetch data</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map((item: Post) => (
              <li className={utilStyles.listItem} key={item.id}>
                {item.title}
                <br />
                {item.id}
                <br />
                {item.date}
              </li>
            ))
          }
        </ul>
      </section>

      <footer>
        <Image src='/vercel.svg' alt='Powver by' width={180} height={37} />
      </footer>
    </main>
  )
}
