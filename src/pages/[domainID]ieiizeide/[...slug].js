import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Data from '../../data/data.json'

export default function Field() {
    const [field, setField] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const domainSlug = router.query.domainID || []
        const fieldSlug = router.query.slug || []
        const field = Data.domains.find(domain => domain.id === domainSlug)?.fields.find(field => field.id === fieldSlug)

        setField(field)
    }, [])

    return (
        <>
            <section className="mt-10">
                <div className="row">
                    <div className="col-span-1">{field &&
                        field.name
                    }</div>
                </div>    
            </section>
        </>
    )
}