import * as fs from "fs";
import Link from "next/link";
import { getMediiiaPath } from "../components/getMediiiaPath";
import { Title } from "../components/Title";

export async function getServerSideProps() {
    const paths = fs.readdirSync(getMediiiaPath());
    return { props: { paths } };
}

export default function CatalogPage({ paths }) {
    return (
        <div id="root">
            <Title>iiindex</Title>
            <header>
                <h1>iiindex</h1>
            </header>
            <div id="list">
                {paths.map((x) => (
                    <Link href={`./api/media/${x}`} key={x}>
                        <a>{x}</a>
                    </Link>
                ))}
            </div>
            <style jsx>{`
                #list {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                a {
                    font-size: 150%;
                    text-decoration: none;
                    margin-bottom: 0.3em;
                    padding-left: 1.3em;
                    color: black;
                }
                a::before {
                    content: "i";
                    transform: translate(-0.6em, -0.1em) rotate(90deg);
                    font-weight: 200;
                    display: inline-block;
                    width: 0;
                }
                a:hover {
                    background-color: #dd1010;
                    color: white;
                }
            `}</style>
        </div>
    );
}
