import { useMutation } from "@tanstack/react-query"
import useAuthStore from "../store/AuthStore"
import axios from "axios"

interface SignUp {
	loginId: string
	password: string
	name: string
	email: string
}

const signUp = async (data: SignUp) => {
	const response = await axios.post("/api/users/register", data)
	return response
}

export const useSignUp = () => {
	return useMutation({
		mutationFn: signUp,
		onSuccess: () => {
			alert("success")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
