import Link from "next/link";

export default function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about"> About </Link>
                </li>
                <li>
                    <Link href="/contact"> Contact </Link>
                </li>
                <li>
                    <Link as="/post/first" href="/post/[id]"> First Post </Link>
                </li>
                <li>
                    <Link as="/post/second" href="/post/[id]"> Second Post </Link>
                </li>
            </ul>
        </>
    );
};



