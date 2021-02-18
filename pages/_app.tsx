import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme/index'

import { init } from '@socialgouv/matomo-next'

/*
	APP
	Here we can add components and styles on top of every page of the site
	- Matomo Analytics (Privacy respecting and anonymized)
	- Chakra Provider and Theme Management (For styling)
*/

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		init({
			url: MATOMO_URL,
			siteId: MATOMO_SITE_ID
		})
	}, [])

	return (
		<ChakraProvider theme={theme}>
			{/* This is the body of the different pages of the site, wrap it with anything */}
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
