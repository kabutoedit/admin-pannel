import { create } from 'zustand'

interface MessagesState {
	selectedIds: string[]
	toggle: (id: string) => void
	deleteMessages: () => void
}

export const useMessagesStore = create<MessagesState>(set => ({
	selectedIds: [],

	toggle: id =>
		set(state => ({
			selectedIds: state.selectedIds.includes(id)
				? state.selectedIds.filter(item => item !== id)
				: [...state.selectedIds, id],
		})),

	deleteMessages: () => set({ selectedIds: [] }),
}))
