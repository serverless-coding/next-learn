import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Script src="/next.config.js" strategy='lazyOnload' onLoad={
                () => console.log(`script loaded`)
            } /> */}

            <h1>FirstPost</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>

            <Image src="/profile.jpg" alt="profile" width={140} height={140}></Image>

            <Image src='/vercel.svg' alt="logo" width={144} height={144}></Image>
        </Layout>
    );
}
