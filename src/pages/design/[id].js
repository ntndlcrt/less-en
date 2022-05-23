import Data from '../../data/data.json'
import Field from '../../layouts/field'


export default function FieldDesign(props) {
    return (
        <Field {...props} />
    )
}

FieldDesign.getLayout = function getLayout(pageProps) {
    return (
        <Field {...pageProps} />
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
                url: `/design/${field.id}`,
                name: field.name
            })
        })
    })

    return {
        props: {
            fields,
            domain: {
                id: 'design',
                name: 'Design'
            },
            id: field.id,
            name: field.name,
            total: field.steps.length,
            steps: field.steps
        }
    }
}