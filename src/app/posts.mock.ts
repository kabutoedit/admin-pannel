export type PostStatus = 'positive' | 'neutral' | 'negative'

export interface Post {
	id: string
	author: {
		name: string
		avatar: string
	}
	source: 'instagram'
	createdAt: string
	status: PostStatus
	text: string
}

export const postsMock: Post[] = [
	{
		id: '1',
		author: {
			name: 'Анастасия Вал',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
		},
		source: 'instagram',
		createdAt: '22.09.2026 11:45',
		status: 'positive',
		text: 'Аэрофлот устроил финальный аккорд года — распродажа билетов со скидками до 50%...',
	},
	{
		id: '2',
		author: {
			name: 'Антон Рал',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
		},
		source: 'instagram',
		createdAt: '22.09.2026 11:45',
		status: 'neutral',
		text: 'Аэрофлот устроил финальный аккорд года — распродажа билетов со скидками до 50%...',
	},
	{
		id: '3',
		author: {
			name: 'Ромал',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
		},
		source: 'instagram',
		createdAt: '22.09.2026 11:45',
		status: 'positive',
		text: 'Аэрофлот устроил финальный аккорд года — распродажа билетов со скидками до 50%...',
	},
	{
		id: '4',
		author: {
			name: 'Анастасия Вал',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
		},
		source: 'instagram',
		createdAt: '22.09.2026 11:45',
		status: 'negative',
		text: 'Аэрофлот устроил финальный аккорд года — распродажа билетов со скидками до 50%...',
	},
]
