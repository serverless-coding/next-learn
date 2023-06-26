import Head from 'next/head'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import Link from 'next/link'
import { Data } from './api/log'
interface Post {
  id: string;
  date: string;
  title: string;
}


/*
使用Next.js的预渲染（静态生成）技术生成静态博客页面，
getStaticProps()用于获取异步数据并将其作为属性传递给页面组件,将其添加到对象中的props属性中，以便在页面组件中访问。
getStaticProps()方法是一个特殊的Next.js函数，它允许我们在构建静态站点时提前加载所需数据。
当我们使用next build构建应用程序时，构建工具将预取和预渲染应用程序中的所有页面，并将数据注入到每个页面组件中。
这使得我们可以从受支持的数据源获取数据，并在构建时预处理数据，从而从根本上提高性能。
总之，这个函数使用了Next.js提供的getStaticProps()函数来获取异步数据，并将其注入到返回的对象中，以便在预先生成的静态页面中使用。
*/
export async function getServerSideProps() {
  const allPostsData: Post[] = getSortedPostsData();
  const res = await fetch('http://localhost:3000/api/log');
  const data = await res.json();

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return {
    props: {
      allPostsData,
      data
    }
  };
}


// 静态网页加载本地 /next.svg不生效?

export default function Home({ allPostsData, data }: {
  allPostsData: Post[]
  data: Data
}) {
  return (
    <main>
      <Head >
        <title>learn Next.js: fetch data</title>
      </Head>
      <h1>learn Next.js: fetch data</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Next.js</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map((item: Post) => (
              <ul className={utilStyles.listItem} key={item.id}>
                <Link href={`/posts/${item.id}`}>{item.title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={item.date} />
                </small>
              </ul>
            ))
          }
        </ul>
      </section>
      <div>
        <label> fetch api log: {data.id}{data.log}{data.age} </label>
      </div>

      <br></br>
      <div>
        <label> Power By Next.js</label>
      </div >

      <div className="article">
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </article>
        <style jsx>{`
            .article {
                display: flex;
                margin: 16px auto;
                max-width: 700px;
                font-size: 12px;
            }
            @media (min-width: 768px) {
                .article {
                    font-size: 18px;
                }
            }
        `}</style>
      </div>
    </main >
  )
}
