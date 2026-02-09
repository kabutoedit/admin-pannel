'use client'
import { Message } from '@/src/components/message/Message'
import styles from './style.module.scss'
import Calendar from '@/src/components/ui/calendar/Calendar'

export default function Home() {
	return (
		<div className={styles.messages}>
			<Calendar />
			<Message />
		</div>
	)
}
