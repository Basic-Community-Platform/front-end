import Link from "next/link"
import { PencilLine } from "lucide-react"
import { Button } from "@/components/ui/button"

const BoardPage = () => {
	return (
		<div>
			<Link href="/board/create">
				<Button>
					<PencilLine className="mr-2 h-4 w-4" />
					글쓰기
				</Button>
			</Link>
			<Link href="/board/2">
				<Button>2번 게시물</Button>
			</Link>
		</div>
	)
}
export default BoardPage
