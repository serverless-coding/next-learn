import Header from '../../../components/header'
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Header></Header>
            <h1>Post:{id}</h1>
        </>
    )
}