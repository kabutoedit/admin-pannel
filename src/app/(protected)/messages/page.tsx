'use client'
import { Message } from '@/src/components/message/Message'
import styles from './style.module.scss'
import Calendar from '@/src/components/ui/calendar/Calendar'
import DeleteBtn from '@/src/components/ui/deleteBtn/DeleteBtn'
import Filters from '@/src/components/filters/Filters'
import { useState } from 'react'

type DateRangeOrSingle =
	| {
			from: Date
			to?: Date
	  }
	| undefined

export default function Home() {
	const [isShow, setIsShow] = useState(true)

	const [search, setSearch] = useState('')
	const [selectedRange, setSelectedRange] = useState<DateRangeOrSingle>()

	return (
		<div className={styles.messagesPage}>
			<div className={styles.left}>
				<div className={styles.upside}>
					<Calendar selectedRange={selectedRange} onChange={setSelectedRange} />
					{isShow && <DeleteBtn />}
				</div>

				<Message search={search} selectedRange={selectedRange} />
			</div>

			<Filters search={search} setSearch={setSearch} />
		</div>
	)
}
