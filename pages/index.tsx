import Head from 'next/head'
import { Box, Center, Flex, Stack, Text, Heading } from '@chakra-ui/react'
import { ThemeType } from './_app'

import Background from '../components/ui/Background'
import ThemeButton from '../components/ui/ThemeButton'

/*
	HOME PAGE
	Accessible at https://moosehour.com
*/

interface Props {
	/*  Value of the current theme */
    theme: ThemeType,
	/*	Set theme function, inherited from _app
		Takes a ThemeType as a parameter ("light", "dark" or "moose") and changes the theme state	*/
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

const Home : React.FC<Props> = ( props ) => {
	return (
		<div>
			<Head>
				<title>MOOSE ~ Time Banking</title>
			</Head>

			<main>
				{/* The main body of the home page is a flex that spans the entire window
					We add the different components underneath 
					The background component around it applies the bg color globally	*/}
				<Background>
					<Flex h="100vh" direction="column">
						{/* TODO: Main Menu */}

						{/* Landing message, it expands the remaining portion of the screen */}
						<Center flexGrow={1} m={10}>
							<Box w="80vw">
								<Heading as="h1" size="3xl" mb={8} fontFamily="Moose Title">MOOSE</Heading>

								<Stack spacing={2} mb={12}>
									<Heading as="h2" size="2xl">Bank time,</Heading>
									<Heading as="h2" size="2xl">Exchange Purpose</Heading>
								</Stack>

								<Stack spacing={4} mb={12}>
									<Text fontSize="xl" fontWeight="600">MOOSE is an MIT award-winning mutually-beneficial skill exchange platform.</Text>
									<Text fontSize="xl" fontWeight="600">We believe that when you share, it should always be fair.</Text>
									<Text fontSize="xl" fontWeight="600">Sign up below to join MOOSE Beta.</Text>
								</Stack>

								<ThemeButton {...props}/>
							</Box>
						</Center>

						{/* Footer, add copyright, privacy policy and FAQ's here */}
						<footer>
							<Center my={2}>
								<Text fontWeight="bold" fontSize="14px">MOOSE ⓒ 2021 ~ All Rights Reserved</Text>
							</Center>
						</footer>
					</Flex>
				</Background>
			</main>
		</div>
	)
}

export default Home