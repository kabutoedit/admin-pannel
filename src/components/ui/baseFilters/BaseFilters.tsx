'use client'

import { useState } from 'react'
import styles from './BaseFilters.module.scss'

type Props = {
	onChange: (value: string) => void
}

export default function BaseFilters({ onChange }: Props) {
	const [active, setActive] = useState<string>('')

	const handleClick = (value: string) => {
		setActive(value)
		onChange(value)
	}

	const filters = [
		{ label: 'дата', value: 'date' },
		{ label: 'лайки', value: 'likes' },
		{ label: 'просмотры', value: 'views' },
		{ label: 'комментарии', value: 'comments' },
		{ label: 'аудитория', value: 'audience' },
	]

	return (
		<div className={styles.btns}>
			{filters.map(filter => (
				<button
					className={`${styles.btn} ${
						active === filter.value ? styles.active : ''
					}`}
					key={filter.value}
					onClick={() => handleClick(filter.value)}
				>
					{filter.label}
				</button>
			))}
		</div>
	)
}
