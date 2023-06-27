import { useRouter } from "next/router";
import Header from '../components/header'


export default function Login() {
    const router = useRouter();
    const onLogin = (e: any) => {
        e.preventDefault()
        router.push('/dashboard')
    }

    return (
        <>
            <Header />
            <input placeholder="User Name" />
            <input placeholder="Password" type="password" />
            <button onClick={onLogin} type='button'>
                Log In
            </button>
        </>
    );
}