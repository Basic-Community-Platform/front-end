import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

interface CreatedPost {
	title: string
	content: string
}

const createPost = async (data: CreatedPost) => {
	const response = await api.post("/api/posts", data)
	alert(response.statusText)
	return response
}

export const useCreatePost = () => {
	const router = useRouter()
	return useMutation({
		mutationFn: createPost,
		onSuccess: () => {
			alert("success")
			router.push("/board")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
