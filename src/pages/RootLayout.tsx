import { NavBar } from "@/modules/common/components/NavBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />
			<div>{children}</div>
		</div>
	)
}
