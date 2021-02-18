import { Button } from '@chakra-ui/react'
import { ThemeType } from '../pages/_app'

/*
    THEME BUTTON
    Switches the theme when it is pressed
*/

interface Props {
    /*  Value of the current theme */
    theme: ThemeType,
	/*	Set theme function, inherited from _app
		Takes a ThemeType as a parameter ("light", "dark" or "moose") and changes the theme state	*/
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

//Ordered list of available themes
const availableThemes : Array<ThemeType> = ["light", "moose", "dark"]

const ThemeButton : React.FC<Props> = ({ theme, setTheme }) => {
    const iterateTheme = () => {
        const current : number = availableThemes.indexOf(theme)
        setTheme(availableThemes[(current + 1) % availableThemes.length])
    }

    return (
        <Button onClick={() => {iterateTheme()}}>
            Theme {theme}
        </Button>
    )
}

export default ThemeButton