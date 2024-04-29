'use client'
import { useEffect, useRef, useState } from 'react'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { Input } from '../ui/input'
import { Loader2, SearchIcon } from 'lucide-react'

const Search = ({ search, byname }) => {
    const router = useRouter()
    const pathname = usePathname()
    const initialRender = useRef(true)

    const [text, setText] = useState(search)
    const [query] = useDebounce(text, 750)

    useEffect(() => {
        const url = new URL(window.location.href);
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (!query) {
            url.searchParams.delete("query")
            router.push(`${url}`)
        } else {
            url.searchParams.set("query", query)
            router.push(`${url}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (
        <div className="mb-5 mt-4 container mx-auto">
        
            <div className="relative pt-2">
                <Input onChange={e => setText(e.target.value)} placeholder={`Search ${byname}`} />
                <button type="submit" className="absolute right-0 top-0 mr-4 mt-5 ">
                    <SearchIcon className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default Search