import parse from 'html-react-parser'
import Data from '../../data/data.json'

export default function Domain({ name }) {
    return (
        <>
            <section className="mt-10">
                <div className="row">
                    <div className="col-span-1">{parse(name)}</div>
                </div>    
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Data.domains.map((domain) => ({
        params: { domainID: domain.id }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const domain = Data.domains.find(domain => domain.domainID === params.id)

    return {
        props: {
            name: domain.name
        }
    }
}