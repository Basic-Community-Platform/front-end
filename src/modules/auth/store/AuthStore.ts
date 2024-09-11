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
				alert("로그인 되었습니다.")
			},
			logout: () => {
				set({ isLoggedIn: false })
				localStorage.clear()
				alert("로그아웃 되었습니다.")
			},
		}),
		{
			name: "userLoginStatus",
		},
	),
)

export default useAuthStore
