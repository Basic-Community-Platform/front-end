import Link from "next/link"
import { useFetchAllPosts } from "@/modules/board/hooks/post/useFetchAllPosts"
import { PencilLine, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const BoardPage = () => {
	const { data: posts } = useFetchAllPosts()

	return (
		<div className="w-2/3">
			<div>
				<span className="flex flex-row py-6">
					<FileText />총 게시물 {posts?.length || 0}건
				</span>
			</div>
			<Table className="border-t-2 border-slate-600">
				<TableHeader className="bg-slate-50">
					<TableRow>
						<TableHead className="whitespace-nowrap">게시판</TableHead>
						<TableHead className="w-full">제목</TableHead>
						<TableHead className="whitespace-nowrap">등록자명</TableHead>
						<TableHead className="whitespace-nowrap">조회수</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{posts?.toReversed().map((post) => (
						<TableRow key={post.postId}>
							<TableCell className="text-center">{post.postId}</TableCell>
							<TableCell className="font-medium">{post.title}</TableCell>
							<TableCell className="text-center">{post.loginId}</TableCell>
							<TableCell className="text-center">{post.viewCount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex justify-end py-6">
				<Link href="/board/create">
					<Button>
						<PencilLine className="mr-2 h-4 w-4" />
						글쓰기
					</Button>
				</Link>
			</div>
		</div>
	)
}
export default BoardPage
