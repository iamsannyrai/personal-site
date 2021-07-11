import Head from 'next/head'
import { Navbar } from '../components/nav_bar'

export default function AppLayout({ child }) {
    return <>
        <Head>
            <title>NepNinja</title>
            <link
                href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
                rel="stylesheet" />
            <meta name="description" content="NepNinja Blog" />
        </Head>
        {/* Navbar */}
        <Navbar />
        <main className="md:mx-32">{child}</main>
    </>
}