import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore {
	isLoggedIn: boolean
	login: (token: string) => void
	logout: () => void
}
const useAuthStore = create(
	persist<AuthStore>(
		(set) => ({
			isLoggedIn: false,
			login: (token: string) => {
				localStorage.setItem("accessToken", token)
				set({ isLoggedIn: true })
			},
			logout: () => {
				set({ isLoggedIn: false })
				localStorage.clear()
			},
		}),
		{
			name: "userLoginStatus",
		},
	),
)

export default useAuthStore
