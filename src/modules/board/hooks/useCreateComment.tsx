import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

interface CreatedComment {
	comment: string
}

const createComment = async (data: CreatedComment) => {
	const response = await api.post("/api", data)
	return response
}

export const useCreateComment = () => {
	return useMutation({
		mutationFn: createComment,
		onSuccess: () => {
			alert("success")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
