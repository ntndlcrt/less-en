import Data from '../../data/data.json'
import Checkbox from '../../components/Checkbox'
import Sidenav from '../../components/Sidenav'
import Link from 'next/link'

import { useState, useEffect } from 'react'

export default function Field({ fields, id, name, total, steps }) {

    const [completed, setCompleted] = useState()

    useEffect(() => {
        setCompleted(0)
        checkCompleted()
    }, [id])

    function checkCompleted() {
        let newCompleted = 0
        let checkedSteps = JSON.parse(localStorage.getItem('checkedSteps'));
        if(checkedSteps) {
            checkedSteps.forEach(step => {
                step.includes(`design_${id}`)
                    ?
                        newCompleted ++
                    :
                        ''
            })
        }
        setCompleted(newCompleted)
    }

    return (
        <>
            {fields
                ?
                    <Sidenav completed={completed} total={total} fields={fields} activeField={id} />
                :
                    ''
            }
            <section className="mt-24">
                <div className="row grid-cols-4">
                    <div className="col-span-3 col-start-2">
                        <div className="pb-12 mb-9 border-b border-dotted border-gray_dark w-full flex items-start">
                            <div className="breadcrumbs">
                                <Link href="/" passHref>
                                    <a>Home</a>
                                </Link>
                                <span className="separator">/</span>
                                <Link href="/design" passHref>
                                    <a>Design</a>
                                </Link>
                            </div>
                            <h1 className='leading-1 text-140'>/ {name}</h1>
                        </div>
                        {steps &&
                            steps.map((step) => {
                                return <Checkbox checkCompleted={checkCompleted} key={step.id} {...step} domain="design" field={id} />
                            })
                        }
                    </div>
                </div>    
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Data.domains.find(domain => domain.id === 'design').fields.map((field) => ({
        params: { id: field.id }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const field = Data.domains.find(domain => domain.id === 'design').fields.find(field => field.id === params.id)

    let fields = [];
    Data.domains.forEach(domain => {
        domain.fields?.forEach(field => {
            fields.push({
                id: field.id,
                url: `/${domain.id}/${field.id}`,
                name: field.name
            })
        })
    })

    return {
        props: {
            fields,
            id: field.id,
            name: field.name,
            total: field.steps.length,
            steps: field.steps
        }
    }
}