import { useForm } from "react-hook-form"
import { useUpdateComment } from "../../hooks/comment/useUpdateComment"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
	updatedContent: z.string().min(1, "댓글을 입력해주세요."),
})

type UpdateCommentFormType = {
	commentId: string
	content: string
}

export const UpdateCommentForm = ({ commentId, content }: UpdateCommentFormType) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			updatedContent: content,
		},
	})

	const { mutate } = useUpdateComment()

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate({ commentId, ...values })
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="updatedContent"
					render={({ field, fieldState: { error } }) => (
						<FormItem className="w-full">
							<FormControl>
								<Textarea placeholder="댓글을 입력하세요" {...field} />
							</FormControl>
							{error ? (
								<FormMessage />
							) : (
								<div className="h-[1.25rem]"></div> // 에러 메시지가 없을 때 공간 유지
							)}
						</FormItem>
					)}
				/>
				<div className="flex justify-end">
					<Button>수정</Button>
				</div>
			</form>
		</Form>
	)
}
