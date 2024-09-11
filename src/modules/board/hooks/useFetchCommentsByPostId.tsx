import { useQuery } from "@tanstack/react-query"
import api from "@/modules/auth/api"

export interface Comment {
	id: number
	title: string
	content: string
	user: {
		profileImg: string
		name: string
	}
	createdAt: string
	updatedAt: string
}

const getCommentsByPostId = async (id: string | string[] | undefined): Promise<Comment[]> => {
	const response = await api.get(`/api/${id}`)
	const data: Comment[] = response.data
	return data
}

export const useFetchCommentsByPostId = (id: string | undefined) => {
	return useQuery({
		queryKey: ["comments", id],
		queryFn: () => getCommentsByPostId(id && id.toString()),
	})
}
