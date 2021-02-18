import { Box, useStyleConfig } from "@chakra-ui/react"

/*
    BACKGROUND
    Component that creates a div with the propper background color
*/

const Background : React.FC = ( props ) => {
    //The theme style for the box component
	const style = useStyleConfig("Box")
    
    return (
        <Box sx={style}>
            { props.children }
        </Box>
    )
}

export default Background