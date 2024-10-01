import Image from "next/image"
import { useRouter } from "next/router"
import { useFetchCommentsByPostId } from "../../hooks/comment/useFetchCommentsByPostId"
import { DeleteButton } from "./DeleteButton"
import { UpdateCommentForm } from "./UpdateCommentForm"
import useCommentUpdateStore from "@/modules/auth/store/CommentUpdateStore"

export const CommentList = () => {
	const { commentIdUpdated, setIsUpdateMode } = useCommentUpdateStore()

	const router = useRouter()
	const id = router.query.id
	const { data: comments } = useFetchCommentsByPostId(id?.toString())

	return (
		<ul className="w-full">
			<h2 className="p-1">{comments?.length}개의 댓글</h2>
			{comments?.map((comment) => {
				return (
					<li key={comment.commentId} className="flex flex-col justify-between gap-y-7 py-6">
						<div className="flex flex-row items-center justify-between gap-x-3">
							<div className="flex flex-row items-center gap-4">
								<Image src="/avatar.svg" alt="댓글 작성자 프로필 사진" width={30} height={30} />
								<div>{comment.username}</div>
							</div>
							<div className="flex flex-row gap-4">
								{commentIdUpdated?.toString() != comment.commentId.toString() && (
									<button onClick={() => setIsUpdateMode(comment.commentId.toString())}>수정</button>
								)}
								<DeleteButton commentId={comment.commentId.toString()} />
							</div>
						</div>
						{commentIdUpdated?.toString() == comment.commentId.toString() ? (
							<UpdateCommentForm commentId={comment.commentId.toString()} content={comment.content} />
						) : (
							<p>{comment.content}</p>
						)}
					</li>
				)
			})}
		</ul>
	)
}
