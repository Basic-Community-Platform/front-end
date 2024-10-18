import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RootLayout from "./RootLayout"
import axios from "axios"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
	return (
		<RootLayout>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<Toaster />
			</QueryClientProvider>
		</RootLayout>
	)
}
