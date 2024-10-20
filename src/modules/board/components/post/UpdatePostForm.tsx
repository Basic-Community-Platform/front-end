import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useFetchPostById } from "../../hooks/post/useFetchPostById"
import { useUpdatePost } from "../../hooks/post/useUpdatePost"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Modal } from "@/components/common/Modal"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
	title: z.string().min(1, "제목을 입력해주세요."),
	content: z.string().min(1, "내용을 입력해주세요."),
})

export const UpdatePostForm = () => {
	const router = useRouter()

	const { data } = useFetchPostById(router.query.id?.toString())

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: data?.title,
			content: data?.content,
		},
	})

	const { mutate } = useUpdatePost()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		mutate(values)
	}
	return (
		<section className="w-2/3 py-32">
			<Form {...form}>
				<h1 className="w-full min-w-[400px] py-4 text-xl">게시물 수정</h1>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex h-full w-full min-w-[400px] flex-col items-center justify-center rounded-l border border-slate-200 py-16"
				>
					<FormField
						control={form.control}
						name="title"
						render={({ field, fieldState: { error } }) => (
							<FormItem className="w-2/3">
								<FormLabel>제목</FormLabel>
								<FormControl>
									<Input placeholder="제목을 입력하세요" {...field} />
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
						name="content"
						render={({ field, fieldState: { error } }) => (
							<FormItem className="w-2/3">
								<FormLabel>내용</FormLabel>
								<FormControl>
									<Textarea placeholder="내용을 입력하세요" className="h-60" {...field} />
								</FormControl>
								{error ? (
									<FormMessage />
								) : (
									<div className="h-[1.25rem]"></div> // 에러 메시지가 없을 때 공간 유지
								)}
							</FormItem>
						)}
					/>
					<div className="flex w-2/3 flex-row justify-end gap-x-1">
						<Modal
							title="수정 취소"
							text="수정 중인 글이 모두 이전으로 돌아갑니다. 계속하시겠습니까?"
							secondButton={
								<Button
									type="button"
									onClick={() => {
										form.reset()
										router.back()
									}}
								>
									확인
								</Button>
							}
						>
							<Button variant="outline" className="w-1/7">
								취소
							</Button>
						</Modal>
						<Button type="submit" className="w-1/7">
							수정
						</Button>
					</div>
				</form>
			</Form>
		</section>
	)
}
