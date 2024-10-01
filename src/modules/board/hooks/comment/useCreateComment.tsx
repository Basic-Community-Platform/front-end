import { useRouter } from "next/router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/modules/auth/api"

interface CreatedComment {
	content: string
}

const createComment = async (data: CreatedComment, id: string) => {
	const response = await api.post(`/api/posts/${id}/comments`, data)
	return response
}

export const useCreateComment = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const id = router.query.id
	return useMutation({
		mutationFn: (data: CreatedComment) => createComment(data, id?.toString() || ""),
		onSuccess: () => {
			alert("success")
			queryClient.invalidateQueries()
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
