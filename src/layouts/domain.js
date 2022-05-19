import Link from 'next/link'
import Head from 'next/head'

export default function Domain({id, name, fields}) {
  return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{name} | Less-en</title>
            </Head>
            <section className="mt-10">
                <div className="row">
                    <div className="col-span-1">{name}</div>
                    <div className="col-span-1">{fields.length}</div>
                </div>    
            </section>
            <section>
                {fields &&
                    <div className="row">
                        {
                            fields.map((field) => {
                                return (
                                    <div className="col-span-1" key={`${id}-field-${field.id}`}>
                                        <Link href={`/design/${field.id}`}>
                                            <h1>{field.name}</h1>
                                        </Link>
                                        <span>{field.steps.length}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </section>
        </>
    )
}

Domain.getLayout = function getLayout(page) {
    return (
    <Layout>
        {page}
    </Layout>
  )
}