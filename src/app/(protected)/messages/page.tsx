'use client'
import styles from './style.module.scss'
import Calendar from '@/src/components/ui/calendar/Calendar'

export default function Home() {
	return (
		<div className={styles.messages}>
			<Calendar />
		</div>
	)
}
