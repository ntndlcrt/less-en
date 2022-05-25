import Nav from '../components/Nav'
import Footer from '../components/Footer'

// import { useState, useEffect } from 'react'

import '../../styles/app.scss'

export default function App({ Component, pageProps, router }) {
    // const [loaded, setLoaded] = useState(false)

    // useEffect(() => {
    //     if(typeof document !== 'undefined') {
    //         setLoaded(true)
    //     }
    // }, [typeof document])

    return (
        <>
            <Nav />
            {/* <main style={loaded ? {marginBottom: document.querySelector('footer').offsetHeight + 'px'} : {}}> */}
            <main>
                <Component {...pageProps} key={router.route} />
            </main>
            <Footer />
        </>
    )
}