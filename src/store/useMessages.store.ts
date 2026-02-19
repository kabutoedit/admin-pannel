import { create } from 'zustand'
import { api } from '../lib/api'

interface MessagesState {
	selectedIds: string[]
	loading: boolean
	error: string | null

	toggle: (id: string) => void
	clearSelection: () => void
	deleteMessages: (accessToken: string) => Promise<void>
}

const API_BASE_URL = api.defaults.baseURL

export const useMessagesStore = create<MessagesState>((set, get) => ({
	selectedIds: [],
	loading: false,
	error: null,

	toggle: id =>
		set(state => ({
			selectedIds: state.selectedIds.includes(id)
				? state.selectedIds.filter(item => item !== id)
				: [...state.selectedIds, id],
		})),

	clearSelection: () => set({ selectedIds: [] }),

	deleteMessages: async (accessToken: string) => {
		const { selectedIds } = get()

		if (selectedIds.length === 0) return

		try {
			set({ loading: true, error: null })

			const res = await fetch(`${API_BASE_URL}/api/messages/bulk-delete`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({
					external_ids: selectedIds,
				}),
			})

			const data = await res.json()

			if (!res.ok) {
				throw data
			}

			// если удалилось хоть что-то — чистим выбор
			if (data.deleted > 0) {
				set({ selectedIds: [] })
			}
		} catch (err: any) {
			set({
				error: err?.error?.detail || err?.detail || 'Ошибка удаления сообщений',
			})
		} finally {
			set({ loading: false })
		}
	},
}))
