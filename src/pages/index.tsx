import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return <main className={inter.className}>배포자동화 테스트</main>
}
