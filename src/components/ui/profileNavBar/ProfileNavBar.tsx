import styles from './ProfileNavBar.module.scss'

type ProfileNavBarProps = {
	toggleModal: () => void
}

export default function ProfileNavBar({ toggleModal }: ProfileNavBarProps) {
	return (
		<div className={styles.modalOverlay} onClick={toggleModal}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<p>Функционал профиля еще в разработке 🛠️</p>
				<button onClick={toggleModal}>Понятно</button>
			</div>
		</div>
	)
}
