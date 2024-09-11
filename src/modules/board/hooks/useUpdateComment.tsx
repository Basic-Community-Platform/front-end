import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "@/modules/auth/api"

interface UpdatedComment {
	title: string
	content: string
}

const updateComment = async (data: UpdatedComment, id: string) => {
	const response = await api.put(`/api/${id}`, data)
	return response
}

export const useUpdatePost = () => {
	const router = useRouter()
	const id = router.query.id?.toString() || ""
	return useMutation({
		mutationFn: (updatedData: UpdatedComment) => updateComment(updatedData, id),
		onSuccess: () => {
			alert("댓글 수정 성공")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
