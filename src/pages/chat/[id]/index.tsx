import { ChatLayout } from "@/modules/chat/layout/ChatLayout"
import { ChatList } from "@/modules/chat/components/ChatList"
import { ChatRoom } from "@/modules/chat/components/ChatRoom"

const ChatPage = () => {
	const getLayout = ChatPage.getLayout ?? ((page) => page)
	return getLayout(
		<>
			<ChatList />
			<ChatRoom />
		</>,
	)
}
export default ChatPage
ChatPage.getLayout = function getLayout(page: React.ReactNode) {
	return <ChatLayout>{page}</ChatLayout>
}
