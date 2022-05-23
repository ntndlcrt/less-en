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
            <section className="mt-24 mb-12">
                <div className="row grid-cols-5">
                    <div className="breadcrumbs">
                        <Link href="/" passHref>
                            <a>Home</a>
                        </Link>
                    </div>
                    <h1 className="col-span-4 leading-1 text-140">/ {name}</h1>
                </div>    
            </section>
            <section>
                {fields &&
                    <div className="row gap-0">
                        {
                            fields.map((field, index) => {
                                return (
                                    <Link href={`/${id}/${field.id}`}>
                                        <div className="w-full py-8 border-t border-gray_dark border-dotted cursor-pointer" key={`${id}-field-${field.id}`}>
                                            <div className="grid grid-cols-10 items-center">
                                                <div className="col-span-4 items-center flex">
                                                    <div className="label mr-2">0{index + 1}</div>
                                                    <h2 className="text-24">{field.name}</h2>
                                                </div>
                                                <div className="col-span-5">
                                                    <p><span className="text-18">{field.steps.length}</span> checkboxes</p>
                                                </div>
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="33.061" height="13.061" viewBox="0 0 33.061 13.061">
                                                        <g id="Icon_feather-arrow-right" dataName="Icon feather-arrow-right" transform="translate(8.5 -8.97)">
                                                            <path id="Tracé_200" dataName="Tracé 200" d="M7.5,18h32" transform="translate(-16 -2.5)" fill="none" stroke="#1e211f" strokeWinejoin="round" strokeWidth="1.5"/>
                                                            <path id="Tracé_201" dataName="Tracé 201" d="M18,7.5l6,6-6,6" transform="translate(-0.5 2)" fill="none" stroke="#1e211f" strokeWidth="1.5"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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