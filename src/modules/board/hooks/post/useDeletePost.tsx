import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

const deletePost = async (id: string) => {
	const response = await api.delete(`/api/posts/${id}`)
	return response
}

export const useDeletePost = () => {
	const router = useRouter()
	const id = router.query.id?.toString() || ""
	return useMutation({
		mutationFn: () => deletePost(id),
		onSuccess: () => {
			router.push("/board")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
