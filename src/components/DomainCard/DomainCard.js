import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'

export default function DomainCard({ id, number, name, sigil, countFields, countChecklists }) {
    const [symbol, setSymbol] = useState('')

    useEffect(() => {
        switch(sigil) {
            case 'tags' :
                setSymbol('</>')
                break
            case 'typography' :
                setSymbol('<span className="text-24"><span style="font-family: serif !important">A</span>a</span>')
                break
            case 'www' :
                setSymbol('<span className="text-24">www.</span>')
                break
        }
    }, [])

    return (
        <Link href={`/${id}`}>
            <div className="w-100 flex flex-col p-5 rounded-1 border border-gray cursor-pointer">
                <div className="flex items-center justify-between pb-2 mb-6 border-b border-dotted">
                    <span className="label">{number}</span>
                    <span>{name}</span>
                </div>
                <h1 className="text-56 mb-1 font-700">{name}</h1>
                <span className="block mb-25 text-24"><strong>{countFields}</strong> fields</span>
                <div className="flex items-center justify-between">
                    {sigil === 'tags'
                        ?
                            <span className="text-24">{symbol}</span>
                        :
                            parse(symbol)
                    }
                    <div className="rounded-full px-2 py-1 border border-gray_dark text-20 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.414" height="13.121" viewBox="0 0 17.414 13.121">
                            <path id="Icon_feather-check" data-name="Icon feather-check" d="M22,9,11,20,6,15" transform="translate(-5.293 -8.293)" fill="none" stroke="#1e211f" strokeWidth="2"/>
                        </svg>
                        <span className="ml-1 block"><strong>{countChecklists}</strong> checklists</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}