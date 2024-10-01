import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

export const UpdateButton = () => {
	const router = useRouter()
	const id = router.query.id
	return (
		<Button onClick={() => router.push(`/board/update/${id}`)} variant="outline">
			수정
		</Button>
	)
}
