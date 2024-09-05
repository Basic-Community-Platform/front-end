import { AuthLayout } from "@/modules/auth/components/AuthLayout"
import { SignUpForm } from "@/modules/auth/components/SignUpForm"

const SignUpPage = () => {
	const getLayout = SignUpPage.getLayout ?? ((page) => page)
	return getLayout(<SignUpForm />)
}
export default SignUpPage

SignUpPage.getLayout = function getLayout(page: React.ReactNode) {
	return <AuthLayout>{page}</AuthLayout>
}
