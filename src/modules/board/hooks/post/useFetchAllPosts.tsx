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

const getAllPosts = async (): Promise<PostsDetail[]> => {
	const response = await api.get(`/api/posts`)
	const data: PostsDetail[] = response.data
	return data
}

export const useFetchAllPosts = () => {
	return useQuery({
		queryKey: ["posts"],
		queryFn: () => getAllPosts(),
	})
}
