import Data from '../../data/data.json'
import Field from '../../layouts/field'


export default function FieldHosting(props) {
    return (
        <Field {...props} />
    )
}

FieldHosting.getLayout = function getLayout(pageProps) {
    return (
        <Field {...pageProps} />
    )
}

export async function getStaticPaths() {
    const paths = Data.domains.find(domain => domain.id === 'hosting').fields.map((field) => ({
        params: { id: field.id }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const field = Data.domains.find(domain => domain.id === 'hosting').fields.find(field => field.id === params.id)

    let fields = [];
    Data.domains.forEach(domain => {
        domain.fields?.forEach(field => {
            domain.id === 'hosting' ?
                fields.push({
                    id: field.id,
                    url: `/hosting/${field.id}`,
                    name: field.name
                })
            : ''
        })
    })

    return {
        props: {
            fields,
            domain: {
                id: 'hosting',
                name: 'Hosting'
            },
            id: field.id,
            name: field.name,
            total: field.steps.length,
            steps: field.steps
        }
    }
}