import { NavBar } from "@/modules/common/components/NavBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<div className="flex h-screen w-screen flex-col items-center justify-start border border-red-500 pt-16">
				{children}
			</div>
		</>
	)
}
