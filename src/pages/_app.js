import Nav from '../components/Nav'

import '../../styles/app.scss'

export default function App({ Component, pageProps, router }) {
    return (
        <>
            <Nav />
            <main>
                <Component {...pageProps} key={router.route} />
            </main>
        </>
    )
}