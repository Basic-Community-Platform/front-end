import { useRouter } from "next/router"
import { ErrorBoundary } from "react-error-boundary"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { useFetchNextPost } from "../../hooks/post/useFetchNextPost"
import { useFetchPostById } from "../../hooks/post/useFetchPostById"
import { useFetchPreviousPost } from "../../hooks/post/useFetchPreviousPost"
import { CommentForm } from "../comment/CommentForm"
import { DeleteButton } from "./DeleteButton"
import { UpdateButton } from "./UpdateButton"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ErrorFallback } from "@/modules/common/components/ErrorFallback"

export const PostDetail = () => {
	const router = useRouter()
	const id = router.query.id?.toString()
	const { data, isLoading, isError, error } = useFetchPostById(id)
	const { data: previous } = useFetchPreviousPost(id?.toString() || "")
	const { data: next } = useFetchNextPost(id?.toString() || "")

	const { reset } = useQueryErrorResetBoundary()

	if (isLoading) return <p>로딩중...</p>

	if (isError) return <p>{error.message}</p>

	return (
		<div className="flex w-screen flex-col items-center">
			<section className="w-2/3">
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
					<UpdateButton />
					<DeleteButton />
				</div>
				<div className="grid grid-cols-2 py-20">
					{previous ? (
						<Card
							className="flex w-[350px] flex-row items-center justify-self-start bg-slate-50 pl-4"
							onClick={async () => {
								router.push("" + previous?.postId)
							}}
						>
							<ChevronLeft />
							<div>
								<CardHeader>
									<CardDescription>이전 게시물</CardDescription>
								</CardHeader>
								<CardContent>{previous?.title}</CardContent>
							</div>
						</Card>
					) : (
						<div></div>
					)}

					{next && (
						<Card
							className="flex w-[350px] flex-row items-center justify-end justify-self-end bg-slate-50 pr-4"
							onClick={async () => {
								router.push("" + next?.postId)
							}}
						>
							<div>
								<CardHeader>
									<CardDescription>다음 게시물</CardDescription>
								</CardHeader>
								<CardContent>{next ? next?.title : "다음 게시물이 존재하지 않습니다."}</CardContent>
							</div>
							<ChevronRight />
						</Card>
					)}
				</div>
			</section>
			<section className="w-2/3">
				<ErrorBoundary
					onReset={reset}
					fallbackRender={({ error, resetErrorBoundary }) => (
						<ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
					)}
				>
					<CommentForm />
				</ErrorBoundary>
			</section>
		</div>
	)
}
