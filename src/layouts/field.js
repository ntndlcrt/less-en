import Link from 'next/link'
import Checkbox from '../components/Checkbox'
import Sidenav from '../components/Sidenav'
import { useState, useEffect } from 'react'

export default function Field({ fields, domain, id, name, total, steps }) {
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
                step.includes(`${domain.id}_${id}`)
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
                                <Link href={`/${domain.id}`} passHref>
                                    <a>{domain.name}</a>
                                </Link>
                            </div>
                            <h1 className='leading-1 text-120'>/ {name}</h1>
                        </div>
                        {steps &&
                            steps.map((step) => {
                                return <Checkbox checkCompleted={checkCompleted} key={step.id} {...step} domain={domain.id} field={id} />
                            })
                        }
                    </div>
                </div>    
            </section>
        </>
    )
}

Field.getLayout = function getLayout(page) {
    return (
    <Layout>
        {page}
    </Layout>
  )
}