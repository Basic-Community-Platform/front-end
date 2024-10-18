import Link from "next/link"
import { useFetchAllPosts } from "@/modules/board/hooks/post/useFetchAllPosts"
import { PencilLine, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Board = () => {
	const { data: posts } = useFetchAllPosts()

	return (
		<div className="flex w-2/3 flex-col items-center justify-center">
			<span className="flex w-full flex-row items-center py-6 text-sm font-semibold">
				<FileText />총 게시물 {posts?.length || 0}건
			</span>

			<Table className="border-t-2 border-slate-600">
				<TableHeader className="bg-slate-50">
					<TableRow className="whitespace-nowrap">
						<TableHead className="font-semibold">게시판</TableHead>
						<TableHead className="w-full font-semibold">제목</TableHead>
						<TableHead className="font-semibold">등록자명</TableHead>
						<TableHead className="font-semibold">조회수</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{posts?.toReversed().map((post) => (
						<TableRow key={post.postId}>
							<TableCell className="text-center">{post.postId}</TableCell>
							<Link href={`board/${post.postId}`} key={post.postId}>
								<TableCell className="w-screen font-medium">{post.title}</TableCell>
							</Link>
							<TableCell className="text-center">{post.loginId}</TableCell>
							<TableCell className="text-center">{post.viewCount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex w-full justify-end py-6">
				<Link href="/board/create">
					<Button>
						<PencilLine className="mr-2 h-4 w-4" />
						글쓰기
					</Button>
				</Link>
			</div>
			<div className="flex items-center gap-2">
				<Select>
					<SelectTrigger className="w-[100px]">
						<SelectValue placeholder="제목" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">제목</SelectItem>
						<SelectItem value="dark">내용</SelectItem>
						<SelectItem value="system">사용자</SelectItem>
					</SelectContent>
				</Select>
				<Input placeholder="게시물을 검색해보세요." className="w-1/5 min-w-52" />
				<Button type="submit">검색</Button>
			</div>
		</div>
	)
}
export default Board
