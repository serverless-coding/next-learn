import Header from '../components/header'
type UserInfo = {
    name: string
    bio: string
    blog: string
    title: string,
    body: string,
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!res.ok) {
        throw new Error("fetch user failed")
    }
    const user = await res.json();
    return {
        props: {
            data: user
        }
    };
}

export default function Dashboard({ data }: { data: UserInfo }) {
    return (
        <>
            <Header />
            <br />
            <h1><strong>{data.name}{data.title}</strong></h1>
            <p>{`Bio: ${data.bio}`}</p>
            <p>{`Blog: ${data.blog}`}</p>
        </>
    )
}