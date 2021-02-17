import type { AppProps } from 'next/app'
import { init } from "@socialgouv/matomo-next"
import { useEffect } from 'react'

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		init({
			url: MATOMO_URL,
			siteId: MATOMO_SITE_ID
		})
	}, [])

	return <Component {...pageProps} />
}

export default App
