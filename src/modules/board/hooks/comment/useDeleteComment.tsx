import { useRouter } from "next/router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/modules/auth/api"

const deleteComment = async (postId: string, commentId: string) => {
	const response = await api.delete(`/api/posts/${postId}/comments/${commentId}`)
	return response
}

export const useDeleteComment = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const postId = router.query.id?.toString() || ""
	return useMutation({
		mutationFn: (commentId: string) => deleteComment(postId, commentId),
		onSuccess: () => {
			alert("삭제 성공")
			queryClient.invalidateQueries()
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
