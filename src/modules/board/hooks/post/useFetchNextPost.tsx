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

const getNextPost = async (postId: string): Promise<PostsDetail> => {
	const response = await api.get(`/api/posts/${postId}/next`)
	const data: PostsDetail = response.data
	return data
}

export const useFetchNextPost = (postId: string) => {
	return useQuery({
		queryKey: ["next", postId],
		queryFn: () => getNextPost(postId),
		retry: 0,
	})
}
