import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

interface UpdatedData {
	title: string
	content: string
}

const updatePost = async (data: UpdatedData, id: string) => {
	const response = await axios.put(`/api/posts/${id}`, data)
	return response
}

export const useUpdatePost = () => {
	const router = useRouter()
	const id = router.query.id?.toString() || ""
	return useMutation({
		mutationFn: (updatedData: UpdatedData) => updatePost(updatedData, id),
		onSuccess: () => {
			alert("수정 성공")
			router.push(`/board/${id}`)
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
