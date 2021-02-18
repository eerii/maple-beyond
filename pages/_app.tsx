import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Global } from "@emotion/react"

import theme from '../theme/index'
import fonts from "../theme/font-face"

import { init } from '@socialgouv/matomo-next'

/*
	APP
	Here we can add components and styles on top of every page of the site
	- Matomo Analytics (Privacy respecting and anonymized)
	- Chakra Provider and Theme Management (For styling)
*/

//Environmental variables for Matomo
const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

//Type guard for the theme values
export type ThemeType = "light" | "dark" | "moose"
const isValidTheme = (s: string) : s is ThemeType => {
	return s === "light" || s === "dark" || s === "moose"
}

const App = ({ Component, pageProps }: AppProps) => {
	const [currentTheme, setCurrentTheme] = useState<ThemeType>('moose')

	useEffect(() => {
		//Check for a valid theme and apply it on launch
		const localTheme: string | null = localStorage.getItem('Theme')
		if (isValidTheme(localTheme))
			setCurrentTheme(localTheme)

		//Initialize the analytics
		init({
			url: MATOMO_URL,
			siteId: MATOMO_SITE_ID
		})
	}, [])

	return (
		<ChakraProvider theme={extendTheme(theme[currentTheme])}>
			<Global styles={fonts} />
			{/* This is the body of the different pages of the site, wrap it with anything */}
			<Component 
				{...pageProps}
				//Pass the control to set and view the current theme
				theme={currentTheme}
				setTheme={setCurrentTheme}
			/>
		</ChakraProvider>
	)
}

export default App
