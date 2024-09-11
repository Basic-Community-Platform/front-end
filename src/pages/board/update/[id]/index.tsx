import { UpdatePostLayout } from "@/modules/board/layout/UpdatePostLayout"
import { UpdatePostForm } from "@/modules/board/components/UpdatePostForm"

const UpdatePostPage = () => {
	const getLayout = UpdatePostPage.getLayout ?? ((page) => page)
	return getLayout(<UpdatePostForm />)
}
export default UpdatePostPage

UpdatePostPage.getLayout = function getLayout(page: React.ReactNode) {
	return <UpdatePostLayout>{page}</UpdatePostLayout>
}
