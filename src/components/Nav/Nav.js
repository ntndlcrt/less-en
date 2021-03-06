import styles from './Nav.module.scss'
import Data from '../../data/data.json'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
    const [links, setLinks] = useState()

    useEffect(() => {
        let linksArray = []
        Data.domains.forEach(domain => {
            linksArray.push({
                'url': domain.id,
                'title': domain.name
            })
        })
        setLinks(linksArray)
    }, [])

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.navLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="127" height="27" viewBox="0 0 127 27">
                        <g id="Logo" transform="translate(-85 -79)">
                            <text id="_" data-name="®" transform="translate(204 91)" fill="#1e211f" fontSize="10" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">®</tspan></text>
                            <g id="Groupe_8" data-name="Groupe 8">
                            <text id="en" transform="translate(169 101)" fill="#1e211f" fontSize="24" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">EN</tspan></text>
                            <g id="Groupe_1" data-name="Groupe 1">
                                <path id="Tracé_1" data-name="Tracé 1" d="M0,0H19" transform="translate(148 92.5)" fill="#1e211f"/>
                                <path id="Tracé_1_-_Contour" data-name="Tracé 1 - Contour" d="M19,.8H0V-.8H19Z" transform="translate(148 92.5)" fill="#1e211f"/>
                            </g>
                            <text id="Less" transform="translate(85 101)" fill="#1e211f" fontSize="24" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">LESS</tspan></text>
                            </g>
                        </g>
                    </svg>
                </a>
            </Link>
            {links &&
                <div className={styles.navDomains}>
                    {links.map((link) => {
                        return (
                            <Link key={`link-${link.title}`} href={`/${link.url}`} passHref>
                                <a className={styles.navLink}>{link.title}</a>
                            </Link>
                        )
                    })}
                </div>
            }
            <div className={styles.navAbout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="16" viewBox="0 0 116 16">
                    <g id="Groupe_14" data-name="Groupe 14" transform="translate(-85 -88)">
                        <text id="_2k22_" data-name="2k22©" transform="translate(159 101)" fill="#d6d7cf" fontSize="14" fontFamily="ArialMT, Arial" letterSpacing="-0.02em"><tspan x="0" y="0">2K22©</tspan></text>
                        <text id="_" data-name="®" transform="translate(154 95)" fill="#d6d7cf" fontSize="6" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.02em"><tspan x="0" y="0">®</tspan></text>
                    </g>
                </svg>
            </div>
        </nav>
    )
}