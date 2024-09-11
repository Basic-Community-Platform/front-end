import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "../api"
import useAuthStore from "../store/AuthStore"

interface SignIn {
	loginId: string
	password: string
}

const signIn = async (data: SignIn) => {
	const response = await api.post("/api/users/login", data)
	return response
}

export const useSignIn = () => {
	const router = useRouter()
	const { login } = useAuthStore()
	return useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			const accessToken = response.data.accessToken
			login(accessToken)
			router.push("/")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
