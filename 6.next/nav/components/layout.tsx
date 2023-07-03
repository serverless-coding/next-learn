import Link from "next/link";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
    return (
        <div className="ml-3">
            <nav>
                <Header />
            </nav>
            <br />

            <main>{children}</main>

            <br />
            <footer>
                <Link href="https://github.com/serverless-coding"> &copy; 2023 serverless</Link>
            </footer>
        </div>
    );
};

export default Layout;
