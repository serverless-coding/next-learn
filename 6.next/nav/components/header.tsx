import Link from "next/link";
import styles from './header.module.css'

export default function Header() {
    return (
        <>
            <ul className="flex list-none p-0 m-0 text-center">
                <li className={styles.item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/login"> Login </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/post"> DataFetching </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/events"> Routing&Link </Link>
                </li>
                <li className={styles.item}>
                    <Link href="https://github.com/serverless-coding/next-learn"> Github </Link>
                </li>
            </ul>
        </>
    );
};



