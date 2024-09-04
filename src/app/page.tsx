import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
	return (
		<div>
			<Button>채팅하기</Button>
			<Button variant="outline">채팅하기</Button>
			<Input type="search" placeholder="게시글을 검색해보세요." />
			<Avatar>
				<AvatarImage src="avatar.svg" />
			</Avatar>
			<Textarea placeholder="댓글을 입력하세요." />
		</div>
	)
}
