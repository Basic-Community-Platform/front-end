import { create } from "zustand"

type CommentUpdateType = {
	commentIdUpdated: string
	setIsUpdateMode: (commentIdUpdated: string) => void
}

const useCommentUpdateStore = create<CommentUpdateType>((set) => ({
	commentIdUpdated: "",
	setIsUpdateMode: (commentIdUpdated: string) => set({ commentIdUpdated }),
}))

export default useCommentUpdateStore
