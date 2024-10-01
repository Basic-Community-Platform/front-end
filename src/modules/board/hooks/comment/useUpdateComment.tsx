import { useRouter } from "next/router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/modules/auth/api"
import useCommentUpdateStore from "@/modules/auth/store/CommentUpdateStore"

interface updateComment {
	commentId: string
	updatedContent: string
}

const updateComment = async (postId: string, commentId: string, updatedContent: string) => {
	const response = await api.put(`/api/posts/${postId}/comments/${commentId}`, { content: updatedContent })
	return response
}

export const useUpdateComment = () => {
	const { setIsUpdateMode } = useCommentUpdateStore()

	const queryClient = useQueryClient()
	const router = useRouter()
	const postId = router.query.id?.toString() || ""

	return useMutation({
		mutationFn: ({ commentId, updatedContent }: { commentId: string; updatedContent: string }) =>
			updateComment(postId, commentId, updatedContent),
		onSuccess: () => {
			alert("댓글 수정 성공")
			queryClient.invalidateQueries()
			setIsUpdateMode("")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
