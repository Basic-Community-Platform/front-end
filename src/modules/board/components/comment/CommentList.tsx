import Image from "next/image"
import { useRouter } from "next/router"
import { useFetchCommentsByPostId } from "../../hooks/comment/useFetchCommentsByPostId"
import { DeleteButton } from "./DeleteButton"
import { UpdateButton } from "./UpdateButton"

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
								<Image src={""} alt="댓글 작성자 프로필 사진" width={30} height={30} />
								<div>{comment.content}</div>
							</div>
							<p className="py-6">{comment.content}</p>
						</div>
						<div className="flex items-start gap-x-2 text-gray-400">
							<UpdateButton />
							<DeleteButton />
						</div>
					</li>
				)
			})}
			{/* 더미 데이터 (api연결 후 삭제 예정) */}
			<li key={0} className="flex flex-row justify-between py-6">
				<div>
					<div className="flex flex-row items-center gap-x-3">
						<Image src="/avatar.svg" alt="댓글 작성자 프로필 사진" width={30} height={30} />
						<div>한재경</div>
					</div>
					<p className="py-6">야끼우동. 그의 상대는? 국밥입니다.</p>
				</div>
				<div className="flex items-start gap-x-2 text-gray-400">
					<UpdateButton />
					<DeleteButton />
				</div>
			</li>
			<li key={1} className="flex flex-row justify-between py-6">
				<div>
					<div className="flex flex-row items-center gap-x-3">
						<Image src="/avatar.svg" alt="댓글 작성자 프로필 사진" width={30} height={30} />
						<div>조준희</div>
					</div>
					<p className="py-6">먹는 생각은 원래 행복한 것입니다.</p>
				</div>
				<div className="flex items-start gap-x-2 text-gray-400">
					<UpdateButton />
					<DeleteButton />
				</div>
			</li>
		</ul>
	)
}
