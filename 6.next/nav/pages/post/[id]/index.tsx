import Layout from '@/components/layout';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Context } from 'react';

type postData = {
    origin: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id: string = context.query.id as string
    console.log("fetch:", id, context.query)

    const res = await fetch(`https://echo.apifox.com/ip`);
    if (!res.ok) {
        throw new Error("fetch post failed" + res.text())
    }

    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
};

export default function Post({ post }: { post: postData }) {
    const router = useRouter();
    const { id } = router.query;
    console.log("query val:", { id })
    return (
        <Layout>
            <h1><strong>query post {id} from IP:</strong></h1>
            <br />
            <p>{post.origin}</p>
            <br />
            <Link href='https://echo.apifox.com'><p>Power By apifox</p></Link>
        </Layout>
    )
}

