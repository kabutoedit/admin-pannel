'use client'
import { Message } from '@/src/components/message/Message'
import styles from './imageDetector.module.scss'
import Calendar from '@/src/components/ui/calendar/Calendar'
import Filters from '@/src/components/filters/Filters'
import { useState } from 'react'

export default function imageDetector() {
	const [search, setSearch] = useState('')
	const [selectedRange, setSelectedRange] = useState<any>()
	// const [refreshTrigger, setRefreshTrigger] = useState(0)

	return (
		<div className={styles.imageDetector}>
			<div className={styles.left}>
				<div className={styles.upside}>
					<Calendar selectedRange={selectedRange} onChange={setSelectedRange} />
				</div>

				<h1>В разработке</h1>

				{/* <Message
					search={search}
					selectedRange={selectedRange}
					refreshTrigger={refreshTrigger}
				/> */}
			</div>

			<Filters search={search} setSearch={setSearch} />
		</div>
	)
}
