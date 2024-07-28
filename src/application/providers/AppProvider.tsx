import ReduxProvider from './redux-provider'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return <ReduxProvider>{children}</ReduxProvider>
}

export default AppProvider
