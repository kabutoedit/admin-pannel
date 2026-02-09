'use client'

import styles from './Message.module.scss'
import { postsMock } from '../../app/posts.mock'

export function Message() {
	return (
		<div className={styles.list}>
			{postsMock.map(post => (
				<div key={post.id} className={styles.card}>
					<div className={styles.left}>
						<input type='checkbox' />
					</div>

					<div className={styles.content}>
						<div className={styles.header}>
							<img src={post.author.avatar} alt='' />
							<div>
								<p className={styles.name}>{post.author.name}</p>
								<span className={styles.meta}>
									instagram.org ·{' '}
									<p className={styles.date}>{post.createdAt}</p>
								</span>
							</div>
						</div>

						<p className={styles.text}>
							{post.text}
							<span className={styles.more}> Показать полный текст</span>
						</p>
					</div>

					<div className={`${styles.status} ${styles[post.status]}`} />
				</div>
			))}
		</div>
	)
}
