import { useRouter } from "next/router"
import { usePostById } from "../hooks/usePostById"

export const PostDetail = () => {
	const router = useRouter()
	const id = router.query.id?.toString()
	const { data, isLoading, isError, error } = usePostById(id)

	if (isLoading) return <p>로딩중...</p>

	if (isError) return <p>{error.message}</p>

	return (
		<div>
			게시물 상세: {router.query.id} {data?.title} {data?.content} {data?.viewCount} {data?.commentCount}{" "}
			{data?.createdAt}
		</div>
	)
}
