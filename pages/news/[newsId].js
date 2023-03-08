// ourDomain.com/news/detailed-news

import {useRouter} from "next/router"

function DetailedNews(){

    const router = useRouter();

    console.log(router.query.newsId);

    return <h1>Specific news</h1>
}

export default DetailedNews