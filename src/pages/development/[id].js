import Data from '../../data/data.json'
import Field from '../../layouts/field'


export default function FieldDevelopment(props) {
    return (
        <Field {...props} />
    )
}

FieldDevelopment.getLayout = function getLayout(pageProps) {
    return (
        <Field {...pageProps} />
    )
}

export async function getStaticPaths() {
    const paths = Data.domains.find(domain => domain.id === 'development').fields.map((field) => ({
        params: { id: field.id }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let dataFields = Data.domains.find(domain => domain.id === 'development').fields
    const field = dataFields.find(field => field.id === params.id)

    let fields = []
    dataFields?.forEach(field => {
        fields.push({
            id: field.id,
            url: `/development/${field.id}`,
            name: field.name
        })
    })

    return {
        props: {
            fields,
            domain: {
                id: 'development',
                name: 'Development'
            },
            id: field.id,
            name: field.name,
            total: field.steps.length,
            steps: field.steps
        }
    }
}