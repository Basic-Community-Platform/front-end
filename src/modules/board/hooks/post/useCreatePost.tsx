import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

interface CreatedPost {
	title: string
	content: string
}

const createPost = async (data: CreatedPost) => {
	const response = await api.post("/api/posts", data)
	return response
}

export const useCreatePost = () => {
	const router = useRouter()
	return useMutation({
		mutationFn: createPost,
		onSuccess: (response) => {
			const postId = response.data.postId
			router.push(`/board/${postId}`)
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
