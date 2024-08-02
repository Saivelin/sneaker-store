import { Header } from '@/widgets/header'
import AppProvider from '../providers/AppProvider'
import { Footer } from '@/widgets/footer'

export default function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body>
				<AppProvider>
					<Header />
					{children}
					<Footer />
				</AppProvider>
			</body>
		</html>
	)
}
