import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import api from "@/modules/auth/api"

type UserInfo = { loginId: string; name: string; profileImageUrl: string; email: string }

export interface PostsDetail {
	postId: number
	title: string
	content: string
	viewCount: number
	commentCount: number
	userInfo: UserInfo
}

interface Pageable {
	pageNumber: number
	pageSize: number
	sort: Sort
	offset: number
	paged: boolean
	unpaged: boolean
}

interface Sort {
	empty: boolean
	sorted: boolean
	unsorted: boolean
}
interface PagedPostResponse {
	content: PostsDetail[]
	pageable: Pageable
	last: boolean
	totalPages: number
	totalElements: number
	first: boolean
	size: number
	number: number
	sort: Sort
	numberOfElements: number
	empty: boolean
}

const getAllPosts = async (page: string | "0", size: string): Promise<PagedPostResponse> => {
	const response = await api.get(`/api/posts`, {
		params: {
			page,
			size,
		},
	})
	const data: PagedPostResponse = response.data
	return data
}

export const useFetchAllPosts = () => {
	const router = useRouter()
	const page = router.query.page as string
	const size = "10"
	return useQuery({
		queryKey: ["posts", page, size],
		queryFn: () => getAllPosts(page || "0", size),
	})
}
