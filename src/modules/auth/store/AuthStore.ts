import { create } from "zustand"
import { persist } from "zustand/middleware"

type UserType = {
	loginId: string
	name: string
	email: string
	profileImageUrl: string
}

interface AuthStore {
	user: UserType | null
	isLoggedIn: boolean
	setUser: (user: UserType) => void
	getUser: () => UserType | null
	login: (token: string) => void
	logout: () => void
}

const useAuthStore = create(
	persist<AuthStore>(
		(set, get) => ({
			user: null,
			isLoggedIn: false,
			setUser: (user: UserType) => {
				set({ user })
			},
			getUser: () => {
				return get().user
			},
			login: (token: string) => {
				localStorage.setItem("accessToken", token)
				set({ isLoggedIn: true })
				alert("로그인 되었습니다.")
			},
			logout: () => {
				set({ isLoggedIn: false, user: null })
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
