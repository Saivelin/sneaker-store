import AppProvider from '../providers/AppProvider'

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru'>
            <body>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    )
}
