import Link from "next/link";
import { getMediiiaPath } from "../components/getMediiiaPath";
import { Title } from "../components/Title";
import { Dree, scan } from "dree";
import removeUndefinedObjects from "remove-undefined-objects";

export async function getServerSideProps() {
    let paths = scan(getMediiiaPath(), {
        size: false,
        sizeInBytes: false,
        showHidden: false,
        excludeEmptyDirectories: true,
        symbolicLinks: false,
        exclude: /(\$RECYCLE\.BIN)|(System Volume Information)/,
        sorted: true,
    });
    paths = removeUndefinedObjects(paths);
    return { props: { paths } };
}

export default function CatalogPage({ paths }: { paths: Dree }) {
    return (
        <div id="root">
            <Title>iiindex</Title>
            <header>
                <h1>iiindex</h1>
            </header>
            <div id="list">
                {(paths.children ?? []).map((x) => (
                    <Link href={`./api/media/${x.relativePath}`} key={x.relativePath}>
                        <a>{name(x.name)}</a>
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
                    max-width: calc(100% - 1.3em);
                    overflow-wrap: break-word;
                    font-size: 150%;
                    text-decoration: none;
                    margin-bottom: 0.5em;
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

function name(x: string) {
    const parts = x.split("_");
    return (
        <>
            {parts.map((x, i) => (
                <>
                    {x}
                    {i < parts.length - 1 ? (
                        <>
                            _<wbr />
                        </>
                    ) : (
                        ""
                    )}
                </>
            ))}
        </>
    );
}
