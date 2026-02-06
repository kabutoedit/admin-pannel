import Header from '../../components/layout/Header'
import NavBar from '../../components/layout/NavBar'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='app'>
			<Header />
			<div className='content' style={{ display: 'flex' }}>
				<NavBar />
				{children}
			</div>
		</div>
	)
}
