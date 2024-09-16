import { useDeleteComment } from "../../hooks/comment/useDeleteComment"

export const DeleteButton = () => {
	const { mutate } = useDeleteComment()
	return <button onClick={() => mutate()}>삭제</button>
}
