import { AuthLayout } from "@/modules/auth/layout/AuthLayout"
import { SignInForm } from "@/modules/auth/components/SignInForm"

const SignInPage = () => {
	const getLayout = SignInPage.getLayout ?? ((page) => page)
	return getLayout(<SignInForm />)
}
export default SignInPage

SignInPage.getLayout = function getLayout(page: React.ReactNode) {
	return <AuthLayout>{page}</AuthLayout>
}
