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
            <footer>&copy; 2023 serverless</footer>
        </div>
    );
};

export default Layout;
