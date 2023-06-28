import Layout from "@/components/layout";
import Link from "next/link";

function Posts() {
    const ps = ["1", "2", "3"]
    return (
        <Layout>
            <ul>
                {
                    ps.map((post) => (
                        <li key={post}>
                            <Link href={`/post/${post}`} >post: {post} </Link>
                        </li>
                    ))
                }
            </ul>
        </Layout >
    )
}

export default Posts;