import Image from "next/image"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export const ChatRoom = () => {
	const chatMessages = [
		{
			messageContent: "안녕하세요! 오늘 약속 잊지 않았죠?",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:00:00.000Z",
		},
		{
			messageContent: "물론이죠! 몇 시에 만날까요?",
			senderUsername: "jinhyeok",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:02:00.000Z",
		},
		{
			messageContent: "12시쯤 어때요? 점심도 먹고 이야기 나눠요.",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:04:00.000Z",
		},
		{
			messageContent: "좋아요! 장소는 어디로 할까요?",
			senderUsername: "jinhyeok",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:06:00.000Z",
		},
		{
			messageContent: "그럼, 강남역 근처 카페는 어때요?",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:08:00.000Z",
		},
		{
			messageContent: "완벽하네요! 그럼 12시에 봬요.",
			senderUsername: "jinhyeok",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:10:00.000Z",
		},
		{
			messageContent: "알겠어요! 그때 봬요~",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:12:00.000Z",
		},
		{
			messageContent: "안녕하세요! 오늘 약속 잊지 않았죠?",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:14:00.000Z",
		},
		{
			messageContent: "물론이죠! 몇 시에 만날까요?",
			senderUsername: "jinhyeok",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:16:00.000Z",
		},
		{
			messageContent: "12시쯤 어때요? 점심도 먹고 이야기 나눠요.",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:18:00.000Z",
		},
		{
			messageContent: "좋아요! 장소는 어디로 할까요?",
			senderUsername: "jinhyeok",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:20:00.000Z",
		},
		{
			messageContent: "그럼, 강남역 근처 카페는 어때요?",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:22:00.000Z",
		},
		{
			messageContent: "알겠어요! 그때 봬요~",
			senderUsername: "minsun",
			profileImg: "https://avatars.githubusercontent.com/u/77449569?v=4",
			sentAt: "2025-01-20T10:26:00.000Z",
		},
	]

	const scrollRef = useRef<HTMLUListElement>(null)
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight
		}
	}, [])

	return (
		<section className="flex h-full w-full flex-col justify-end gap-y-4 px-4 pt-20">
			<ul ref={scrollRef} className="max-h-full overflow-scroll p-4">
				{chatMessages.map((chatMessage, idx, arr) => (
					<li key={chatMessage.sentAt} className="flex gap-x-3">
						{arr[idx - 1]?.senderUsername !== chatMessage.senderUsername ? (
							<Image
								src={chatMessage.profileImg}
								alt="profile image"
								width={50}
								height={50}
								className="h-12 rounded-full"
							/>
						) : (
							<span className="h-12 w-12 rounded-full" />
						)}
						<div>
							{arr[idx - 1]?.senderUsername !== chatMessage.senderUsername && (
								<strong>{chatMessage.senderUsername}</strong>
							)}
							<div className="flex py-1">
								<p className="rounded-b-xl rounded-e-xl bg-gray-200 p-4">{chatMessage.messageContent}</p>
								{arr[idx - 1]?.sentAt !== chatMessage.sentAt && (
									<time className="flex flex-col justify-end text-xs text-gray-600">{chatMessage.sentAt}</time>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
			<form action="" className="items-between my-3 flex w-full flex-col gap-x-4 border border-gray-300">
				<textarea className="min-h-24 p-3 outline-none" />
				<div className="flex justify-end p-4">
					<Button>전송</Button>
				</div>
			</form>
		</section>
	)
}
