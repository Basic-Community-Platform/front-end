import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
	name: z.string().min(1, "1글자 이상 입력하세요"),
	loginId: z.string(),
	email: z.string(),
	password: z.string(),
})

function onSubmit(values: z.infer<typeof formSchema>) {
	console.log(values)
}

export const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "minsun",
		},
	})

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>이름</FormLabel>
							<FormControl>
								<Input placeholder="이름을 입력하세요" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="loginId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>아이디</FormLabel>
							<FormControl>
								<Input placeholder="아이디를 입력하세요" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>이메일</FormLabel>
							<FormControl>
								<Input placeholder="이메일을 입력하세요" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>비밀번호</FormLabel>
							<FormControl>
								<Input placeholder="비밀번호를 입력하세요" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					로그인
				</Button>
			</form>
		</Form>
	)
}
