import { getAllPostIds, getPostData } from "../../business_logic/post"
import Date from "../../components/date"

export default function Post({postData}) {
    return <div className="max-w-3xl mx-auto">
        <div className="px-8 my-2">
            <h1 className="text-4xl font-bold font-body mb-2">{postData.title}</h1>
            {Date(postData.date)}
        </div>
        <hr />
        <article
            className="prose lg:prose-lg px-8 m-auto my-2 prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
    </div>
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
