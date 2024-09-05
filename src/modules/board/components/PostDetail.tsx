import { useRouter } from "next/router"
import { usePostById } from "../hooks/usePostById"
import { CommentForm } from "./CommentForm"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const PostDetail = () => {
	const router = useRouter()
	const id = router.query.id?.toString()
	const { data, isLoading, isError, error } = usePostById(id)

	if (isLoading) return <p>로딩중...</p>

	if (isError) return <p>{error.message}</p>

	return (
		<div className="w-full">
			<section>
				<Table className="border-b border-t border-gray-200">
					<TableBody>
						<TableRow>
							<TableCell className="bg-gray-100 px-9 text-lg" colSpan={4}>
								{data?.title}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="w-1/12 bg-gray-100 text-center">등록자</TableCell>
							<TableCell className="w-1/3 text-gray-500">등록자</TableCell>
							<TableCell className="w-1/12 bg-gray-100 text-center">등록일</TableCell>
							<TableCell className="w-1/3 text-gray-500">{data?.createdAt}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="bg-gray-100 text-center">조회수 </TableCell>
							<TableCell className="text-gray-500">{data?.viewCount}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<div className="p-4">
					<p>{data?.content}</p>
				</div>
				<div className="flex justify-end gap-x-2">
					<Button variant="outline">수정</Button>
					<Button>삭제</Button>
				</div>
			</section>
			<CommentForm commentCount={data?.commentCount || 0} />
		</div>
	)
}
