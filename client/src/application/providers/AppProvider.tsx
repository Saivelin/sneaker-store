import { ChakraProvider } from '@chakra-ui/react'
import ReduxProvider from './redux-provider'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReduxProvider>
            <ChakraProvider>
                {children}
                </ChakraProvider>
        </ReduxProvider>
    )
}

export default AppProvider
