import 'react-day-picker/dist/style.css'
import '../globals.scss'
import { Providers } from '../providers'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-montserrat',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru' className={montserrat.variable}>
			<body className='font-sans'>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
