import ArrowRightIcon from "@/components/icons/arrow-right-icon";
import Layout from "@/components/layout";
import Link from "next/link";

function Posts() {
    const ps = ["1", "2", "3"]
    return (
        <Layout>
            <ul className='ml-10 stroke-slate-400'>
                {
                    ps.map((post) => (
                        <li key={post} className='font-semibold'>
                            <Link href={`/post/${post}`} >post: {post} </Link>
                            {
                                /* equal to this:
                                   <Link
                                    href={{
                                        pathname: "/post/[id]",
                                        query: { id: post },
                                    }}
                                >
                                    post:  {post}
                                </Link>; 
                                */
                            }
                        </li>
                    ))
                }
            </ul>
        </Layout >
    )
}

export default Posts;