import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

import Data from '../data/data.json'

import DomainCard from '../components/DomainCard'
import Tablet from '../components/Tablet'

export default function Home({ cards }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Lessen | How to make green web</title>
            </Head>
            <section className="pt-15">
                <div className="row grid-cols-5 items-start">
                    <div className="col-span-3 pt-16">
                        <h3 className="text-120 leading-1 mb-10"><span className="text-white pl-8">Eco-friendly</span><br/>websites<br/>made simple</h3>
                    </div>
                    <div className="col-span-2 grid grid-cols-7">
                        <div className="col-span-4 col-start-3">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 341.506 341.506">
                                <defs>
                                    <filter id="Soustraction_4" x="56.214" y="42.734" width="129.579" height="89.699" filterUnits="userSpaceOnUse">
                                    <feOffset dy="3" input="SourceAlpha"/>
                                    <feGaussianBlur stdDeviation="2" result="blur"/>
                                    <feFlood floodOpacity="0.122"/>
                                    <feComposite operator="in" in2="blur"/>
                                    <feComposite in="SourceGraphic"/>
                                    </filter>
                                </defs>
                                <g id="Groupe_118" data-name="Groupe 118" transform="translate(-942.554 402.448) rotate(-30)">
                                    <circle id="Ellipse_3" data-name="Ellipse 3" cx="125" cy="125" r="125" transform="translate(955 231)" fill="#e85549"/>
                                    <g id="Groupe_121" data-name="Groupe 121" transform="translate(0 -324)">
                                    <path id="Soustraction_3" data-name="Soustraction 3" d="M152.977,120H27.023a124.926,124.926,0,0,1,125.95,0l0,0h0Z" transform="translate(990 452)" fill="#d6d7cf"/>
                                    <g transform="matrix(0.87, 0.5, -0.5, 0.87, 1017.5, 446.75)" filter="url(#Soustraction_4)">
                                        <path id="Soustraction_4-2" data-name="Soustraction 4" d="M125.954,0H0A124.365,124.365,0,0,0,29.812,12.552,125.3,125.3,0,0,0,62.977,17a125.3,125.3,0,0,0,33.165-4.448A124.367,124.367,0,0,0,125.95,0l0,0h0Z" transform="translate(62.21 108.71) rotate(-30)" fill="#ff5e4f"/>
                                    </g>
                                    </g>
                                    <g id="Smiley" transform="translate(1020 297.666)">
                                    <path id="Trac??_202" data-name="Trac?? 202" d="M71.156-186.883c6.747,0,12.374,2.122,16.726,6.306A21.439,21.439,0,0,1,94.47-164.5a27.421,27.421,0,0,1-1.16,7.911q-.294.976-.65,1.9a26.679,26.679,0,0,1,4.878-3.212,23.961,23.961,0,0,1,11.04-2.793,20.926,20.926,0,0,1,16.036,7.246,25.066,25.066,0,0,1,6.5,17.385,21.125,21.125,0,0,1-6.639,16.012c-4.376,4.125-10.09,6.217-16.984,6.217-.662,0-1.3-.021-1.916-.063a25.472,25.472,0,0,1,7.356,6.549,21.9,21.9,0,0,1,4.7,13.511c0,6.21-2.518,11.764-7.483,16.508A24.208,24.208,0,0,1,93-70.214c-6.061,0-11.422-2.43-15.935-7.221a24.217,24.217,0,0,1-6.055-10.76A24.124,24.124,0,0,1,65.05-77.166a21,21,0,0,1-15.821,6.952A24.207,24.207,0,0,1,32.082-77.33c-4.965-4.744-7.483-10.3-7.483-16.508a22.628,22.628,0,0,1,4.891-13.814,25.149,25.149,0,0,1,6.662-6.224q-.807.041-1.643.041c-6.742,0-12.38-2.106-16.756-6.26a21.158,21.158,0,0,1-6.635-15.97,25.027,25.027,0,0,1,6.507-17.428,20.975,20.975,0,0,1,16.032-7.2,24.7,24.7,0,0,1,11.1,2.744,26.282,26.282,0,0,1,4.926,3.166q-.393-.967-.711-1.975a25.721,25.721,0,0,1-1.206-7.739A21.375,21.375,0,0,1,54.4-180.58C58.773-184.762,64.412-186.883,71.156-186.883Zm15.038,45.728-1.427-1.9a.967.967,0,0,0-.218-.192c-.213-.149-.479-.315-.793-.494l-1.71-.977,5.1-7.1a19.7,19.7,0,0,0,2.764-5.791A23.873,23.873,0,0,0,90.92-164.5a17.785,17.785,0,0,0-5.5-13.519,18.3,18.3,0,0,0-6.289-3.976,22.679,22.679,0,0,0-7.977-1.34,22.758,22.758,0,0,0-7.988,1.34,18.481,18.481,0,0,0-6.32,3.979A17.723,17.723,0,0,0,51.314-164.5a22.178,22.178,0,0,0,1.041,6.672,21.532,21.532,0,0,0,2.969,6.014l4.813,6.777L58.719-144c-.578.421-.95.69-1.136.822a5.033,5.033,0,0,1-.664.415l-1.322.66-4.93-6.542a20.546,20.546,0,0,0-7.5-6.128,21.189,21.189,0,0,0-9.511-2.369,17.334,17.334,0,0,0-13.41,6.046,20.857,20.857,0,0,0-4.18,6.793,23.56,23.56,0,0,0-1.4,8.242A17.51,17.51,0,0,0,20.2-122.669a18.5,18.5,0,0,0,6.321,3.953,22.907,22.907,0,0,0,7.992,1.332,26.217,26.217,0,0,0,3.446-.217,15.391,15.391,0,0,0,2.811-.622l8.689-2.861v2.188c.031.085.079.212.15.4a8.523,8.523,0,0,1,.435,1.38l.3,1.525-7.874,2.688a20.1,20.1,0,0,0-10.149,7.393,19.161,19.161,0,0,0-4.174,11.676,17.653,17.653,0,0,0,1.574,7.371A21.508,21.508,0,0,0,34.534-79.9a22.646,22.646,0,0,0,6.9,4.613,20.175,20.175,0,0,0,7.792,1.52A17.352,17.352,0,0,0,62.463-79.6a20.718,20.718,0,0,0,4.2-6.575,23.315,23.315,0,0,0,1.552-8.02v-.018l.292-8.376H73.86v8.593a19.71,19.71,0,0,0,1.437,7.5,21.676,21.676,0,0,0,4.356,6.622C83.523-75.761,87.89-73.764,93-73.764a20.175,20.175,0,0,0,7.792-1.52,22.646,22.646,0,0,0,6.9-4.613,21.508,21.508,0,0,0,4.812-6.571,17.653,17.653,0,0,0,1.574-7.371,18.19,18.19,0,0,0-3.976-11.36,22.351,22.351,0,0,0-10.495-7.577l-.01,0-7.368-2.671v-1.244a4.23,4.23,0,0,1,.246-1.336,7.468,7.468,0,0,1,.608-1.327l.7-1.23,7.709,2.35a20.572,20.572,0,0,0,2.845.64,21.405,21.405,0,0,0,3.146.213,23.912,23.912,0,0,0,8.178-1.327,18.4,18.4,0,0,0,6.372-3.924,17.479,17.479,0,0,0,5.525-13.43,23.364,23.364,0,0,0-1.4-8.193,21.1,21.1,0,0,0-4.184-6.808,17.287,17.287,0,0,0-13.406-6.081,20.45,20.45,0,0,0-9.414,2.4,21.437,21.437,0,0,0-7.522,6.258Zm-15.038-5.284a20.656,20.656,0,0,1,15.124,6.176,20.656,20.656,0,0,1,6.176,15.124,20.656,20.656,0,0,1-6.176,15.124,20.656,20.656,0,0,1-15.124,6.176,20.656,20.656,0,0,1-15.124-6.176,20.656,20.656,0,0,1-6.176-15.124,20.656,20.656,0,0,1,6.176-15.124A20.656,20.656,0,0,1,71.156-146.439Zm0,39.049a17,17,0,0,0,12.614-5.136,17,17,0,0,0,5.136-12.614,17,17,0,0,0-5.136-12.614,17,17,0,0,0-12.614-5.136,17,17,0,0,0-12.614,5.136,17,17,0,0,0-5.136,12.614,17,17,0,0,0,5.136,12.614A17,17,0,0,0,71.156-107.39Z" transform="translate(-11.117 186.883)" fill="#1e211f"/>
                                    <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="26.622" cy="26.622" rx="26.622" ry="26.622" transform="translate(33.364 35.262)" fill="#e85549"/>
                                    <path id="Trac??_191" data-name="Trac?? 191" d="M521.338,195.555a28.4,28.4,0,0,1-20.093-48.479,28.408,28.408,0,1,1,40.186,40.165A27.383,27.383,0,0,1,521.338,195.555Zm0-3.619a24.769,24.769,0,0,0,17.535-42.289,24.788,24.788,0,1,0-35.071,35.04A23.906,23.906,0,0,0,521.338,191.936ZM504.657,168.73h2.23q2.671,11.732,14.454,11.731t14.453-11.731h2.265q-.842,7.6-5.287,11.913a17.287,17.287,0,0,1-22.847,0Q505.5,176.331,504.657,168.73Zm7.638-6.1a4.5,4.5,0,1,1,0-8.99,4.495,4.495,0,0,1,4.533,4.5,4.3,4.3,0,0,1-1.334,3.179A4.4,4.4,0,0,1,512.295,162.628Zm18.088,0a4.392,4.392,0,0,1-3.2-1.316,4.455,4.455,0,0,1,0-6.357,4.4,4.4,0,0,1,3.2-1.316,4.5,4.5,0,1,1,0,8.99Z" transform="translate(-461.338 -105.275)" fill="#1e211f"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-5 flex items-end justify-between">
                        <p className="text-20 font-300 w-40 pl-8">A collection of the best sustainable<br/>web good practices.</p>
                        <Link href="/#domains">
                            <div className="flex items-center cursor-pointer">
                                <span className="mr-1_5">Scroll to explore</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.061" height="17.061" viewBox="0 0 13.061 17.061">
                                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(22.03 -7.5) rotate(90)">
                                        <path id="Trac??_200" data-name="Trac?? 200" d="M7.5,18h16" transform="translate(0 -2.5)" fill="none" stroke="#1e211f" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Trac??_201" data-name="Trac?? 201" d="M18,7.5l6,6-6,6" transform="translate(-0.5 2)" fill="none" stroke="#1e211f" strokeWidth="1.5"/>
                                    </g>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <img className="mix-blend-luminosity" src="/leaf.webp" />
                </div>
            </section>
            <section id="domains">
                <span className="w-50 text-120 block mb-5 leading-1_1 font-500">Our collection</span>
                <div className="row grid-cols-3">
                    {cards &&
                        cards.map((card) => {
                            return (
                                <DomainCard key={`domain-card-${card.id}`} {...card} />
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <Tablet />
            </section>
            <section>
                <div className="row">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="127" height="27" viewBox="0 0 127 27">
                                <g id="Logo" transform="translate(-85 -79)">
                                    <text id="_" data-name="??" transform="translate(204 91)" fill="#1e211f" fontSize="10" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">??</tspan></text>
                                    <g id="Groupe_8" data-name="Groupe 8">
                                    <text id="en" transform="translate(169 101)" fill="#1e211f" fontSize="24" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">EN</tspan></text>
                                    <g id="Groupe_1" data-name="Groupe 1">
                                        <path id="Trac??_1" data-name="Trac?? 1" d="M0,0H19" transform="translate(148 92.5)" fill="#1e211f"/>
                                        <path id="Trac??_1_-_Contour" data-name="Trac?? 1 - Contour" d="M19,.8H0V-.8H19Z" transform="translate(148 92.5)" fill="#1e211f"/>
                                    </g>
                                    <text id="Less" transform="translate(85 101)" fill="#1e211f" fontSize="24" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">LESS</tspan></text>
                                    </g>
                                </g>
                            </svg>
                            <span className="ml-0_5">gallery</span>
                        </div>
                        <div className="ml-4">
                            <span className="px-2 py-1 border border-gray rounded-full">Coming soon</span>
                        </div>
                    </div>
                    <p className="text-140 leading-1 text-center tracking-tight">A showcase of the best sustainable websites</p>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const domains = Data.domains
    let cards = []
    let index = 0

    domains.forEach(domain => {
        index ++
        let countChecklists = 0

        domain.fields?.forEach(field => {
            countChecklists += field.steps.length
        })

        cards.push({
            id: domain.id,
            number: '0' + index,
            name: domain.name,
            sigil: domain.sigil ?? '',
            countFields: domain.fields?.length ?? 0,
            countChecklists,
        })
    })

    return {
        props: {
            cards
        }
    }
}
