import React from 'react'
import styles from './DetailsModal.module.scss'
import { AudienceIcon } from '@/public/icons'

type MessageType = {
	source?: string | null
	message_type?: string | null
	author?: string | null
	author_url?: string
	audience?: number
	published_at?: string | null
	url?: string | null
	text?: string | null
	tone?: string | null
}

type DetailsModalProps = {
	selectedMessage: MessageType | null
	closeModal: () => void
	search: string
	highlightText: (text: string, search: string) => React.ReactNode
}

export default function DetailsModal({
	selectedMessage,
	closeModal,
	search,
	highlightText,
}: DetailsModalProps) {
	if (!selectedMessage) return null

	console.log(selectedMessage)

	return (
		<div className={styles.modalOverlay} onClick={closeModal}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<button className={styles.closeBtn} onClick={closeModal}>
					×
				</button>

				<div className={styles.modalHeader}>
					<div className={styles.sourceInfo}>
						<span className={styles.sourceName}>{selectedMessage.source}</span>
						<span className={styles.msgType}>
							{selectedMessage.message_type || 'сообщение'}
						</span>
						<a
							href={selectedMessage.author_url}
							target='_blank'
							rel='noreferrer'
							className={styles.authorName}
						>
							{selectedMessage.author}
						</a>
						<span className={styles.audienceCount}>
							<AudienceIcon /> {selectedMessage.audience || 0}
						</span>
					</div>
					<div className={styles.dateInfo}>
						{selectedMessage.published_at &&
							new Date(selectedMessage.published_at).toLocaleString('ru-RU')}
					</div>
				</div>

				<hr className={styles.divider} />

				<div className={styles.modalBody}>
					<div className={styles.fullText}>
						{highlightText(selectedMessage.text || '', search)}
					</div>
				</div>

				<div className={styles.modalFooter}>
					<p>
						<span className={styles.span}>Оригинал сообщения:</span>{' '}
						<a
							href={selectedMessage.url || '#'}
							target='_blank'
							rel='noreferrer'
						>
							{selectedMessage.url}
						</a>
					</p>
					<p>
						<span className={styles.span}>Сила тональности:</span>
						{selectedMessage.tone === 'позитив'
							? ' позитив — 1'
							: ' позитив — 0'}
						,
						{selectedMessage.tone === 'негатив'
							? ' негатив — 1'
							: ' негатив — 0'}
						.
					</p>
				</div>
			</div>
		</div>
	)
}
