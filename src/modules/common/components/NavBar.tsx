import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const NavBar = () => {
	return (
		<header>
			<nav className="fixed flex h-16 w-screen flex-row items-center justify-between whitespace-nowrap border border-b-2 border-slate-200">
				<div className="flex w-1/5 items-center justify-center">
					<Link href="/">
						<h1>로고</h1>
					</Link>
				</div>
				<Link href="/board">
					<button>게시판</button>
				</Link>
				<Input placeholder="게시물을 검색해보세요." className="w-1/5 min-w-52" />
				<div className="flex w-1/2 items-center justify-center gap-x-8">
					<Link href="/auth/signup">
						<button>회원가입</button>
					</Link>
					<Link href="/auth/signin">
						<button>로그인</button>
					</Link>
					<Link href="/chat">
						<Button variant="outline">채팅하기</Button>
					</Link>
				</div>
			</nav>
		</header>
	)
}
