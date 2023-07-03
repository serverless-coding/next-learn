import Link from "next/link";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
    return (
        <div className="ml-3">
            <nav>
                <Header />
            </nav>
            <br />

            <main className='m-auto h-full'>
                {children}
            </main>

            <br />
            <footer>
                <div>
                    <ul className="flex">
                        <li className="mr-4"> <Link href="https://github.com/serverless-coding"> &copy; 2023 serverless</Link></li>
                        <li className="mr-4"> <Link href="/about"> About </Link></li>
                        <li className="mr-4"> <Link href="/contact"> Contact </Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
