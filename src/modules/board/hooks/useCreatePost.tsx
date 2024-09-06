import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

interface CreatedPost {
	title: string
	content: string
}

const createPost = async (data: CreatedPost) => {
	const payload = { ...data, viewCount: 0, commentCount: 0 }
	const response = await axios.post("/api/posts", payload)
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
