import { Box, Flex, Center, Stack, Heading, Text }  from '@chakra-ui/react'
import Background from '../components/ui/Background'

const Question = ({ children, title, number }) => {
    return (
        <Flex alignItems="flex-start">
            <Heading as="h3" size="3xl" mt={{sm: 4, md: 3}} minW={{sm: 12, md: 16}}>{number}.</Heading>
            <Box mt="4">
                <Heading as="h3" size="lg" mb={2} color="maple.500">{title}</Heading>
                <Text>{children}</Text>
            </Box>
        </Flex>
    )
}

const FAQ = () => {

    return (
        <Background>
            <Center>
                <Box maxW="900px" mx={8} my={16}>
                    <Heading as="h1" size="2xl" mb={12}>Frequently Asked Questions</Heading>

                    <Stack spacing={4}>
                        <Question title={"What is MOOSE?"} number={1}>
                            MOOSE is a global community of people who share their <b>skills</b> in exchange for <b>Time Tokens</b>. At MOOSE, we believe that when you share, it should be fair. This philosophy simply means that you can redeem your Time Tokens for absolutely any skill on offer that you might need in return!
                        </Question>
                        <Question title={"What counts as a skill?"} number={2}>
                            At MOOSE, we firmly believe that <b>everyone has something to share</b>. What seems small or inconsequential to you may be a great help to someone else, and vice versa! Skills can come in the form of knowledge, experiences, or acts of service. Our needs are all so unique that the <b>possibilities are endless</b>. A few of our favourites include online tutoring, consulting, crafting and mindfulness. In the midst of COVID-19, simply offering to lend an empathetic ear or to cook, paint, code, read, work out (and so on!) with someone will go a long way!
                        </Question>
                        <Question title={"What is a Time Token?"} number={3}>
                            MOOSE believes that everyone who gives should also get <b>something in return</b>. On MOOSE, time is literally money -  in the form of Time Tokens, of course. When you provide the skill, you will receive a Time Token. When you receive the skill, you give the Time Token. In short, our platform allows you to bank the time spent in service to others. Please note that everyone’s time will be valued <b>equally</b>. What may seem small to you might make a world of difference to someone else, and vice versa.
                        </Question>
                        <Question title={"How does the exchange of Time Tokens take place?"} number={4}>
                            The exchange of Time Tokens takes place <b>every 10 minutes</b>. When you provide the skill, you will receive a Time Token. When you receive the skill, you give the Time Token. Please note that while we use the adage “<b>Time is Money</b>”, Time Tokens are not legal tender and cannot be cashed in as such. Additionally, at this time, the MOOSE platform does not encourage or support exchanges outside of skills and Time Tokens. Should you find yourself needing to provide another user with cash, please do so on your own terms and at your own risk.
                        </Question>
                        <Question title={"Can you tell me more about the security and privacy of MOOSE?"} number={5}>
                            MOOSE is nothing without our community, so each and every feature was engineered with you - our valued MOOSE community member! - in mind. What does this mean? A few things! MOOSE is proud to have created <b>a brand new video calling system</b> that is secure and private by design. How private? So private that your video will never even touch a MOOSE server. Your calls will stream directly with the person you’re interacting with, meaning MOOSE literally cannot collect any data other than how long you’ve interacted for, in order to facilitate the exchange of skills and Time Tokens only. MOOSE trusts that you’ll be transparent with us, so we’ll be transparent with you. We don’t sell your data and we don’t show ads on our website. What little data we have is used only to make our platform better for you. Don’t want us to have your data at all? <b>We extend the rights of GDPR to everyone using MOOSE</b>. Contact us at any time and we’ll give you the option to exercise your rights of access, rectification, erasure, restriction, portability and objection. Simply put, you own your data. Fair and square. Do you have a design note for us? We welcome any and all feedback: <Text as="a" href="mailto:hello@moose.exchange" fontWeight="bold">hello@moose.exchange</Text>
                        </Question>
                    </Stack>
                </Box>
            </Center>
        </Background>
    )
}

export default FAQ