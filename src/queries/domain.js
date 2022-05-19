import Data from '../data/data.json'

export async function getDomain(id) {
    let domain = Data.domains.find(domain => domain.id === id)
    let fields = domain?.fields
}