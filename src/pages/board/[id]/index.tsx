import { useRouter } from "next/router"
import { PostDetailLayout } from "@/modules/board/PostDetailLayout"

const PostDetailPage = () => {
	const router = useRouter()
	const getLayout = PostDetailPage.getLayout ?? ((page) => page)
	return getLayout(<div>post: {router.query.id}</div>)
}
export default PostDetailPage

PostDetailPage.getLayout = function getLayout(page: React.ReactNode) {
	return <PostDetailLayout>{page}</PostDetailLayout>
}
