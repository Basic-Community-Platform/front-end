import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavBar } from "@/modules/common/components/NavBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<div className="flex h-screen flex-col items-center justify-center">{children}</div>
		</>
	)
}
