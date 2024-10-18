import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useAuthStore from "@/modules/auth/store/AuthStore"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const NavBar = () => {
	const { isLoggedIn, logout } = useAuthStore()
	const { getUser } = useAuthStore()
	const user = getUser()

	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [position, setPosition] = useState("bottom")

	return (
		<header>
			<nav className="fixed flex h-16 w-screen flex-row items-center justify-between whitespace-nowrap border border-b-2 border-slate-200">
				<div className="flex w-1/2 items-center justify-center gap-x-20">
					<Link href="/">
						<h1>로고</h1>
					</Link>
					<Link href="/board">
						<button>게시판</button>
					</Link>
				</div>
				<div className="flex w-1/2 items-center justify-center gap-x-8">
					{isLoggedIn ? (
						<>
							<Image src="/avatar.svg" alt="profile image" width={30} height={30} />
							{user?.name} 님{/* https://www.radix-ui.com/primitives/docs/components/dropdown-menu#dropdown-menu */}
							<DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
								<DropdownMenuTrigger asChild>{isDropdownOpen ? <ChevronUp /> : <ChevronDown />}</DropdownMenuTrigger>
								<DropdownMenuContent className="w-25">
									<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
										<DropdownMenuRadioItem value="bottom">마이페이지</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="right" onClick={logout}>
											로그아웃
										</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					) : (
						<>
							<Link href="/auth/signup">
								<button>회원가입</button>
							</Link>
							<Link href="/auth/signin">
								<button>로그인</button>
							</Link>
						</>
					)}
					<Link href="/chat">
						<Button variant="outline">채팅하기</Button>
					</Link>
				</div>
			</nav>
		</header>
	)
}
