import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { Layout } from '../components/layout'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })



export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>)

}