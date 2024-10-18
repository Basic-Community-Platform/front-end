import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/hooks/use-toast"
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
	const { toast } = useToast()
	return useMutation({
		mutationFn: createPost,
		onSuccess: () => {
			toast({ title: "success" })
			router.push("/board")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
