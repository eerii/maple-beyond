import colors from './colors'
import styles from './styles'
import { fonts, fontWeights } from './fonts'

import BoxStyle from './components/Box'

/*
	THEME ENTRY POINT
	Returns an object with the different variations of the themes
	To use the return object call extendedTheme(theme.light), this is done in _app
*/

const global = {
	colors,
	fonts,
	fontWeights
}

const theme = {
	light: {
		...global,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.lightStyle
			}
		},
		components: {
			Box: {
				...BoxStyle.light
			}
		}
	},
	dark: {
		...global,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.darkStyle
			}
		},
		components: {
			Box: {
				...BoxStyle.dark
			}
		}
	}, 
	moose: {
		...global,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.mooseStyle
			}
		},
		components: {
			Box: {
				...BoxStyle.moose
			}
		}
	}
}

export default theme