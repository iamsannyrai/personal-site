import fs from "fs"
import path from "path"
import matter from "gray-matter"

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