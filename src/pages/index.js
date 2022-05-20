import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/Nav'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Lessen | How to make green web</title>
            </Head>
            <section className="mt-24">
                <div className="row grid-cols-7 items-end">
                    <div className="col-span-4 pb-12">
                        <h3 className="text-120 leading-1">Eco-friendly websites <span className="text-white">made simple</span></h3>
                    </div>
                    <div className="col-span-2 col-start-6 items-end justify-end">
                        <p className="text-20 text-gray_dark font-300">Our mission is to fight the increasing energy consumption and carbon footprint of internet. By doing so, we provide a collection of the best sustainable good practices.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <img className="mix-blend-luminosity" src="/leaf.webp" />
                </div>
            </section>
            <section>
                <div className="row">
                    <p className="text-240 leading-1 font-700">Join the Digital <span className="text-white">Guerilla</span></p>
                </div>
            </section>
        </>
    )
}
