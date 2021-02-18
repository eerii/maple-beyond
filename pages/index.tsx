import Head from 'next/head'
import { SetStateAction, useState } from 'react'
import { Box, Center, Flex, Stack, Text, Heading, Button } from '@chakra-ui/react'
import { ThemeType } from './_app'
import ThemeButton from '../components/ThemeButton'


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
					We add the different components underneath */}
				<Flex h="100vh" direction="column">
					{/* TODO: Main Menu */}

					{/* Landing message, it expands the remaining portion of the screen */}
					<Center flexGrow={1}>
						<Box w="80vw">
							<Heading as="h1" size="3xl" mb={12}>MOOSE</Heading>

							<Stack spacing={2} mb={12}>
								<Heading as="h2" size="2xl">Bank time,</Heading>
								<Heading as="h2" size="2xl" textColor="my">Exchange Purpose</Heading>
							</Stack>

							<Stack spacing={4}>
								<Text fontSize="xl">MOOSE is an MIT award-winning mutually-beneficial skill exchange platform.</Text>
								<Text fontSize="xl">We believe that when you share, it should always be fair.</Text>
								<Text fontSize="xl">Sign up below to join MOOSE Beta.</Text>
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
			</main>
		</div>
	)
}

export default Home