import { useQuery } from "@tanstack/react-query"
import api from "@/modules/auth/api"

export interface PostsDetail {
	postId: number
	loginId: string
	title: string
	content: string
	viewCount: number
	commentCount: number
	username: string
}

const getPreviousPost = async (postId: string): Promise<PostsDetail> => {
	const response = await api.get(`/api/posts/${postId}/previous`)
	const data: PostsDetail = response.data
	return data
}

export const useFetchPreviousPost = (postId: string) => {
	return useQuery({
		queryKey: ["previous", postId],
		queryFn: () => getPreviousPost(postId),
	})
}
