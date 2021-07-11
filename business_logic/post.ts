import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import prism from "remark-prism"

const postsDirectory = path.join(process.cwd(), 'posts')

export function fetchAllPostsInSortedOrder() {
    const fileNames: string[] = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName: string) => {
        // extract file name without extension
        const id = fileName.replace(/\.md$/, '')

        // get path of file and read its content
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // user gray-matter to parse post's metadata section
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    // sort post by date and return result
    return allPostsData.sort((a, b) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

// gets data of a single post
export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html).use(prism)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}