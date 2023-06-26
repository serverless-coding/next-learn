import Head from 'next/head';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticPaths, GetStaticProps } from 'next';
import { tr } from 'date-fns/locale';
import Image from 'next/image';

type PostData = {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}

export default function Post({ postData }: PostData) {
    return (
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {postData.date}
                    {<Date dateString={postData.date} />}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <br></br>
            <label>Power By</label>
            <footer>
                <Image className={utilStyles.padding100px} src='/next.svg' alt='Powver by' width={144} height={144} />
            </footer>
        </Layout>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}