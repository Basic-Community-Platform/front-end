import { BoardLayout } from "@/modules/board/layout/BoardLayout"
import Board from "@/modules/board/components/post/Board"

const BoardPage = () => {
	const getLayout = BoardPage.getLayout ?? ((page) => page)
	return getLayout(<Board />)
}
export default BoardPage

BoardPage.getLayout = function getLayout(page: React.ReactNode) {
	return <BoardLayout>{page}</BoardLayout>
}
