"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Topics = () : JSX.Element => {
    const searchParams = useSearchParams()
    const language = searchParams.get('language')
    return (<section>
        <h1>Topics</h1>
        <Link href="/">home</Link>
        <h2>Here are the topics for {language ? language : 'all languages'}</h2>
    </section>)
}

export default Topics