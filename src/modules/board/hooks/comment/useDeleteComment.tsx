import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

const deleteComment = async (id: string) => {
	const response = await api.delete(`/api/${id}`)
	return response
}

export const useDeletePost = () => {
	const router = useRouter()
	const id = router.query.id?.toString() || ""
	return useMutation({
		mutationFn: () => deleteComment(id),
		onSuccess: () => {
			alert("삭제 성공")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
