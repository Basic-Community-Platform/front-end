import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"

export const ChatList = () => {
	const chatList = [
		{
			id: 1,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "minsun",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 2,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "jakeyoung",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 3,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "junice",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 4,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "minsun",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 5,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "jakeyoung",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 6,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "junice",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 7,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "minsun",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 8,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "jakeyoung",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 9,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "junice",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 10,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "minsun",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 11,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "jakeyoung",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
		{
			id: 12,
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			name: "junice",
			lastMessage: "안녕하세요",
			startDate: "2021-10-01",
			endDate: "2021-10-02",
		},
	]
	const router = useRouter()
	const roomId = router.query.id

	return (
		<section className="w-full h-full flex flex-col justify-end gap-y-4 p-4">
			<h2>채팅 목록</h2>
			<ul className="overflow-y-scroll max-h-full">
				{chatList.map((chat) => (
					<Link
						href={`/chat/${chat.id}`}
						key={chat.id}
						className={cn(
							"flex items-center gap-x-4" + (roomId && Number(roomId) === chat.id ? " bg-gray-100" : ""),
						)}
					>
						<Image src={chat.profileImg} alt="profile image" width={50} height={50} className="rounded-full" />
						<button className="flex flex-col p-4">
							<strong className="">{chat.name}</strong>
							<p>{chat.lastMessage.slice(0, 500)}</p>
							<time className="text-xs text-gray-600">
								{chat.startDate}~{chat.endDate}
							</time>
						</button>
					</Link>
				))}
			</ul>
		</section>
	)
}
