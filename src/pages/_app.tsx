import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RootLayout from "./RootLayout"
import "@/styles/globals.css"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</RootLayout>
	)
}
