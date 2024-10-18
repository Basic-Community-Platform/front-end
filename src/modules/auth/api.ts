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

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true
			try {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/api/users/refresh`,
					{},
					{
						withCredentials: true,
					},
				)

				const newAccessToken = response.data.accessToken

				localStorage.setItem("accessToken", newAccessToken)

				originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
				return api(originalRequest)
			} catch (refreshError) {
				localStorage.removeItem("accessToken")
				return Promise.reject(refreshError)
			}
		}
		return Promise.reject(error)
	},
)

export default api
