import Header from '../../../components/header'
import { useRouter } from "next/router";

type postData = {
    id: number
    title: string,
    body: string,
    userId: number
}


export async function getServerSideProps(context: any) {
    const { id } = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("fetch post failed")
    }

    const data = await res.json();
    console.log("fetch res:", data)
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
        <>
            <Header />
            <br />
            <h1><strong>{post.title}</strong></h1>
            <br />
            <p>{post.body}</p>
        </>
    )
}

