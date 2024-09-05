import { PostDetailLayout } from "@/modules/board/layout/PostDetailLayout"
import { PostDetail } from "@/modules/board/components/PostDetail"

const PostDetailPage = () => {
	const getLayout = PostDetailPage.getLayout ?? ((page) => page)
	return getLayout(<PostDetail />)
}
export default PostDetailPage

PostDetailPage.getLayout = function getLayout(page: React.ReactNode) {
	return <PostDetailLayout>{page}</PostDetailLayout>
}
