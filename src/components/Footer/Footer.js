import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-20 px-11 bg-gray_dark w-full text-gray_general">
            <span className=" block text-140 pb-10 mb-10 border-b border-gray_general">Less energy,<br/>a better internet.</span>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="16" viewBox="0 0 116 16">
                        <g id="Groupe_14" data-name="Groupe 14" transform="translate(-85 -88)">
                            <text id="_2k22_" data-name="2k22©" transform="translate(159 101)" fill="#d6d7cf" fontSize="14" fontFamily="ArialMT, Arial" letterSpacing="-0.02em"><tspan x="0" y="0">2K22©</tspan></text>
                            <text id="_" data-name="®" transform="translate(154 95)" fill="#d6d7cf" fontSize="6" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">®</tspan></text>
                            <g id="Groupe_8" data-name="Groupe 8">
                            <text id="Less_en" data-name="Less—en" transform="translate(85 101)" fill="#d6d7cf" fontSize="14" fontFamily="ArialMT, Arial" letterSpacing="-0.02em"><tspan x="0" y="0">LESS—EN</tspan></text>
                            </g>
                        </g>
                    </svg>
                    <a href="https://www.websitecarbon.com/website/lessen-vercel-app/" target="blank">
                        <p className="text-32 mt-9 cursor-pointer">
                            Only <strong>0.24g of CO2</strong> is produced every time someone visits this page
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.603" height="14.603" viewBox="0 0 14.603 14.603" style={{display: 'inline-block', verticalAlign: 'top', transform: 'translate(1rem, 50%)'}}>
                                <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-18.342 11.025) rotate(-45)">
                                    <path id="Tracé_200" data-name="Tracé 200" d="M7.5,18h12" transform="translate(4 -2.5)" fill="none" stroke="#d6d7cf" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Tracé_201" data-name="Tracé 201" d="M18,7.5l6,6-6,6" transform="translate(-0.5 2)" fill="none" stroke="#d6d7cf" strokeWidth="1.5"/>
                                </g>
                            </svg>
                        </p>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-start-2 flex flex-col">
                        <Link href="/design">
                            <span className="mb-1 cursor-pointer">Design</span>
                        </Link>
                        <Link href="/development">
                            <span className="mb-1 cursor-pointer">Development</span>
                        </Link>
                        <Link href="/hosting">
                            <span className="cursor-pointer block mb-4">Hosting</span>
                        </Link>
                        <Link href="/about">
                            <span className="mb-1 cursor-pointer">About</span>
                        </Link>
                        <Link href="/credits">
                            <span className="mb-1 cursor-pointer">Credits</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}