import Link from "next/link"
import { useForm } from "react-hook-form"
import { useSignIn } from "../hooks/useSignIn"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
	loginId: z.string().min(1, "아이디를 입력해주세요."),
	password: z.string().min(1, "비밀번호를 입력해주세요."),
})

export const SignInForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			loginId: "",
			password: "",
		},
	})

	const { mutate } = useSignIn()

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate(values)
	}

	return (
		<Form {...form}>
			<h1 className="w-1/2 min-w-[400px] py-4 text-xl">로그인</h1>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex h-full w-1/2 min-w-[400px] flex-col items-center justify-center rounded-l border border-slate-200 py-16"
			>
				<FormField
					control={form.control}
					name="loginId"
					render={({ field, fieldState: { error } }) => (
						<FormItem className="w-2/3">
							<FormLabel>아이디</FormLabel>
							<FormControl>
								<Input placeholder="아이디를 입력하세요" {...field} />
							</FormControl>
							{error ? (
								<FormMessage />
							) : (
								<div className="h-[1.25rem]"></div> // 에러 메시지가 없을 때 공간 유지
							)}
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field, fieldState: { error } }) => (
						<FormItem className="w-2/3">
							<FormLabel>비밀번호</FormLabel>
							<FormControl>
								<Input placeholder="비밀번호를 입력하세요" {...field} />
							</FormControl>
							{error ? (
								<FormMessage />
							) : (
								<div className="h-[1.25rem]"></div> // 에러 메시지가 없을 때 공간 유지
							)}
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-2/3">
					로그인
				</Button>
				<div className="flex w-2/3 justify-end text-slate-500">
					<Link href="/auth/signup">회원가입</Link>
				</div>
			</form>
		</Form>
	)
}
