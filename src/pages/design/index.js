import Data from '../../data/data.json'
import Domain from '../../layouts/domain'

export default function Design(props) {
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