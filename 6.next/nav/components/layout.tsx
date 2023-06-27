import Link from "next/link";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Header />
                    </li>
                </ul>
            </nav>
            <br />

            <main>{children}</main>

            <br />
            <footer>&copy; 2022 My Website</footer>
        </div>
    );
};

export default Layout;
