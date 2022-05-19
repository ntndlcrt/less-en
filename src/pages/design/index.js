import Data from '../../data/data.json'
import Domain from '../../layouts/domain'

export default function Design(props) {
    // return (
    //     <>
    //         <Head>
    //             <meta charSet="utf-8" />
    //             <meta name="viewport" content="width=device-width, initial-scale=1" />
    //             <title>Lessen | How to make green web</title>
    //         </Head>
    //         <main>
    //             <Nav />
    //             <section className="mt-10">
    //                 <div className="row">
    //                     <div className="col-span-1">{parse(name)}</div>
    //                     <div className="col-span-1">{fields.length}</div>
    //                 </div>    
    //             </section>
    //             <section>
    //                 {fields &&
    //                     <div className="row">
    //                         {
    //                             fields.map((field) => {
    //                                 return (
    //                                     <div className="col-span-1" key={`${id}-field-${field.id}`}>
    //                                         <Link href={`/design/${field.id}`}>
    //                                             <h1>{field.name}</h1>
    //                                         </Link>
    //                                         <span>{field.steps.length}</span>
    //                                     </div>
    //                                 )
    //                             })
    //                         }
    //                     </div>
    //                 }
    //             </section>
    //         </main>
    //     </>
    // )
    return (
        <Domain {...props} />
    )
}

Design.getLayout = function getLayout(pageProps) {
    return (
        <Domain {...pageProps} />
    )
}

export async function getStaticProps() {
    const domain = Data.domains.find(domain => domain.id === 'design')

    return {
        props: {
            id: domain.id,
            name: domain.name,
            fields: domain.fields
        }
    }
}