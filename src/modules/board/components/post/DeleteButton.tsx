import { useDeletePost } from "../../hooks/post/useDeletePost"
import { Button } from "@/components/ui/button"

export const DeleteButton = () => {
	const { mutate } = useDeletePost()
	return <Button onClick={() => mutate()}>삭제</Button>
}
