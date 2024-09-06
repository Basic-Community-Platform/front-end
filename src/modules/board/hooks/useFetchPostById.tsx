import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface PostDetail {
	postId: number
	title: string
	content: string
	viewCount: number
	commentCount: number
	createdAt: string
	updatedAt: string
}

const getPostByPostId = async (id: string | string[] | undefined): Promise<PostDetail> => {
	const response = await axios.get(`/api/posts/${id}`)
	const data: PostDetail = response.data
	return data
}

export const useFetchPostById = (id: string | undefined) => {
	return useQuery({
		queryKey: ["post", id],
		queryFn: () => getPostByPostId(id && id.toString()),
	})
}
