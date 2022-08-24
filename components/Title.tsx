import Head from "next/head";

export function Title({ children = "" }) {
    return (
        <Head>
            <title>{children}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
