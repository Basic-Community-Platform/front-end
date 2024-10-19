import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog"

type ModalType = {
	children: React.ReactNode
	title: string
	text: string
	firstButton?: React.ReactNode
	secondButton?: React.ReactNode
}

export const Modal = ({ children, title, text, firstButton, secondButton }: ModalType) => {
	const DefaultButton = ({ text }: { text?: string }) => (
		<DialogClose asChild>
			<Button type="button" variant="outline">
				{text || "취소"}
			</Button>
		</DialogClose>
	)
	return (
		<div className="flex w-2/3 flex-row justify-end gap-x-2">
			<Dialog>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
					<DialogDescription>{text}</DialogDescription>
					<DialogFooter>
						{firstButton ? firstButton : <DefaultButton />}
						{secondButton ? secondButton : <DefaultButton text="확인" />}
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Button type="button" className="w-1/7">
				수정
			</Button>
		</div>
	)
}
