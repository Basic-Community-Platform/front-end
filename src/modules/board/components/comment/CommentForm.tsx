import { useForm } from "react-hook-form"
import { useCreateComment } from "../../hooks/comment/useCreateComment"
import { CommentList } from "./CommentList"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
	content: z.string().min(1, "댓글을 입력해주세요."),
})

type CommentFormProps = {
	commentCount: number
}

export const CommentForm = ({ commentCount }: CommentFormProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			content: "",
		},
	})

	const { mutate } = useCreateComment()

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate(values)
	}

	return (
		<section className="w-full py-12">
			<h2 className="p-1">{commentCount}개의 댓글</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="content"
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
					<div className="flex w-full flex-row justify-end gap-x-2">
						<Button type="submit" className="w-1/7">
							댓글 작성
						</Button>
					</div>
				</form>
			</Form>
			<CommentList />
		</section>
	)
}
