import { create } from "zustand"

type CommentUpdateType = {
	isUpdateMode: boolean
	commentIdUpdated: string
	setIsUpdateMode: ({ mode, commentIdUpdated }: any) => void
}

const useCommentUpdateStore = create<CommentUpdateType>((set) => ({
	isUpdateMode: false,
	commentIdUpdated: "",
	setIsUpdateMode: ({ mode, commentIdUpdated }: any) => set({ isUpdateMode: mode, commentIdUpdated }),
}))

export default useCommentUpdateStore
