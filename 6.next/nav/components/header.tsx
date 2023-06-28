import Link from "next/link";

export default function Header() {
    return (
        <>
            <ul className="flex list-none p-0 m-0">
                <li className="mr-4">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-4">
                    <Link href="/about"> About </Link>
                </li>
                <li className="mr-4">
                    <Link href="/contact"> Contact </Link>
                </li>
                <li className="mr-4">
                    <Link href="/login"> Login </Link>
                </li>
                <li className="mr-4">
                    <Link href="/post"> Posts </Link>
                </li>
            </ul>
        </>
    );
};



