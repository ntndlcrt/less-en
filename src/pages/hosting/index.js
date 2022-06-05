import Data from '../../data/data.json'
import Domain from '../../layouts/domain'

export default function Hosting(props) {
    return (
        <Domain {...props} />
    )
}

Hosting.getLayout = function getLayout(pageProps) {
    return (
        <Domain {...pageProps} />
    )
}

export async function getStaticProps() {
    const domain = Data.domains.find(domain => domain.id === 'hosting')

    return {
        props: {
            id: domain.id,
            name: domain.name,
            fields: domain.fields
        }
    }
}