import Link from 'next/link'
import styles from './Sidenav.module.scss'
import { useState, useEffect } from 'react'

export default function Sidenav({ completed, total, fields, activeField}) {
    const [totalCompleted, setTotalCompleted] = useState(0)

    useEffect(() => {
        setTotalCompleted(completed)
    }, [completed])

    return (
        <div id={`completed-${activeField}`} className={styles.sidenav}>
            <span className={styles.sidenavCompleted}>{totalCompleted}/{total}</span>
            <div className={styles.sidenavLinks}>
                {fields?.map((field) => {
                    return (
                        <Link key={`link-${field.id}`} href={field.url} passHref>
                            <a className={field.id === activeField ? styles.sidenavLinksActive : ''}>{field.name}</a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}