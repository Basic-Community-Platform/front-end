import { useDeleteComment } from "../../hooks/comment/useDeleteComment"

type DeleteButtonType = {
	commentId: string
}

export const DeleteButton = ({ commentId }: DeleteButtonType) => {
	const { mutate } = useDeleteComment()
	return <button onClick={() => mutate(commentId)}>삭제</button>
}
