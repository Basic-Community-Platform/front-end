import Link from "next/link"
import { useFetchAllPosts } from "@/modules/board/hooks/post/useFetchAllPosts"
import { PencilLine, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Board = () => {
	const { data: posts } = useFetchAllPosts()

	const currentPage = Number(posts?.number) || 0
	const lastPage = Number(posts?.totalPages) || 0

	return (
		<div className="flex w-2/3 flex-col items-center justify-center">
			<span className="flex w-full flex-row items-center py-6 text-sm font-semibold">
				<FileText />총 게시물 {posts?.totalElements || 0}건
			</span>

			{posts?.numberOfElements ? (
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
						{posts?.content.map((post) => (
							<TableRow key={post.postId}>
								<TableCell className="text-center">{post.postId}</TableCell>
								<Link href={`board/${post.postId}`} key={post.postId}>
									<TableCell className="w-screen font-medium">{post.title}</TableCell>
								</Link>
								<TableCell className="text-center">{post.userInfo.name}</TableCell>
								<TableCell className="text-center">{post.viewCount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<p className="flex h-[100px] w-full items-center justify-center border border-slate-200 text-slate-500">
					게시물이 존재하지 않습니다.
				</p>
			)}
			<Pagination>
				<PaginationContent>
					{!posts?.first && (
						<PaginationItem>
							<PaginationPrevious href={`?page=${currentPage - 1}`} />
						</PaginationItem>
					)}
					{Array(7)
						.fill(currentPage - 3)
						.map((num, index) => {
							const pageNumber = num + index
							return (
								// 페이지 번호가 1보다 크거나 같고 totalPages보다 작거나 같을 때만 표시
								pageNumber >= 0 &&
								pageNumber < lastPage && (
									<PaginationItem key={index}>
										<PaginationLink href={`?page=${pageNumber}`} isActive={pageNumber === currentPage}>
											{pageNumber + 1}
										</PaginationLink>
									</PaginationItem>
								)
							)
						})}
					{!posts?.last && (
						<PaginationItem>
							<PaginationNext href={`?page=${currentPage + 1}`} />
						</PaginationItem>
					)}
				</PaginationContent>
			</Pagination>
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
