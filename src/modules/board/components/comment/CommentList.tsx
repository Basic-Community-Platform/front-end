import Image from "next/image"
import { useRouter } from "next/router"
import { useFetchCommentsByPostId } from "../../hooks/comment/useFetchCommentsByPostId"
import { DeleteButton } from "./DeleteButton"
import { UpdateCommentForm } from "./UpdateCommentForm"

export const CommentList = () => {
	const router = useRouter()
	const id = router.query.id
	const { data: comments } = useFetchCommentsByPostId(id?.toString())

	return (
		<ul className="w-full">
			{comments?.map((comment) => {
				return (
					<li key={comment.commentId} className="flex flex-row justify-between py-6">
						<div>
							<div className="flex flex-row items-center gap-x-3">
								<Image src="/avatar.svg" alt="댓글 작성자 프로필 사진" width={30} height={30} />
								<div>{comment.content}</div>
								<UpdateCommentForm commentId={comment.commentId.toString()} content={comment.content} />
								<DeleteButton commentId={comment.commentId.toString()} />
							</div>
							<p className="py-6">{comment.content}</p>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
