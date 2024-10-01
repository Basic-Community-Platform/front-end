import { CreatePostLayout } from "@/modules/board/layout/CreatePostLayout"
import { CreatePostForm } from "@/modules/board/components/post/CreatePostForm"

const CreatePostPage = () => {
	const getLayout = CreatePostPage.getLayout ?? ((page) => page)
	return getLayout(<CreatePostForm />)
}
export default CreatePostPage

CreatePostPage.getLayout = function getLayout(page: React.ReactNode) {
	return <CreatePostLayout>{page}</CreatePostLayout>
}
