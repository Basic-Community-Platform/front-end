import { NavBar } from "@/modules/common/components/NavBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />
			<div className="flex h-screen w-screen flex-col items-center justify-center border border-red-500">
				{children}
			</div>
		</div>
	)
}
