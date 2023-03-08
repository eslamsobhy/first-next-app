// ourDomain.com/news

import Link from "next/link";

function NewsPage(){
    return <>
        <h1>News Page</h1>
        <ul>
            <li><Link href="/news/nextjs-is-a-great-framework">NextJs is a great framework</Link></li>
            <li><Link href="/news/something-else">Something else</Link></li>
        </ul>
        </>
}

export default NewsPage