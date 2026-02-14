import Search from '../ui/search/Search'
import styles from './Filters.module.scss'

type FiltersProps = {
	search: string
	setSearch: (value: string) => void
}

export default function Filters({ search, setSearch }: FiltersProps) {
	return (
		<div className={styles.filters}>
			<Search search={search} setSearch={setSearch} />
		</div>
	)
}
