import { AuthLayout } from "@/modules/auth/components/AuthLayout"

const SignUpPage = () => {
	const getLayout = SignUpPage.getLayout ?? ((page) => page)
	return getLayout(<div>회원가입 페이지</div>)
}
export default SignUpPage

SignUpPage.getLayout = function getLayout(page: React.ReactNode) {
	return <AuthLayout>{page}</AuthLayout>
}
