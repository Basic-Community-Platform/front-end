import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import api from "../api"

interface SignUp {
	loginId: string
	password: string
	name: string
	email: string
}

const signUp = async (data: SignUp) => {
	const response = await api.post("/api/users/register", data)
	return response
}

export const useSignUp = () => {
	const router = useRouter()
	return useMutation({
		mutationFn: signUp,
		onSuccess: () => {
			alert("success")
			router.push("/auth/signin")
		},
		onError: (error) => {
			alert(error.message)
		},
	})
}
