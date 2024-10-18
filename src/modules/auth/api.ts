import axios from "axios"

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
})

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken")

		if (token && !config.url?.includes("users")) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)

export default api
