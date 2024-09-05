import { CreatePostForm } from "@/modules/board/CreatePostForm"
import { CreatePostLayout } from "@/modules/board/CreatePostLayout"

const CreatePostPage = () => {
	const getLayout = CreatePostPage.getLayout ?? ((page) => page)
	return getLayout(<CreatePostForm />)
}
export default CreatePostPage

CreatePostPage.getLayout = function getLayout(page: React.ReactNode) {
	return <CreatePostLayout>{page}</CreatePostLayout>
}
