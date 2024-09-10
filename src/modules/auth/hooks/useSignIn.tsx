import { useMutation } from "@tanstack/react-query"
import useAuthStore from "../store/AuthStore"
import axios from "axios"

interface SignIn {
	loginId: string
	password: string
}

const signIn = async (data: SignIn) => {
	const response = await axios.post("/api/users/login", data)
	return response
}

export const useSignIn = () => {
	const { login } = useAuthStore()
	return useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			const accessToken = response.data.accessToken
			login(accessToken)
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
