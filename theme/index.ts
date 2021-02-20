import colors from './colors'
import styles from './styles'
import { fonts, fontWeights } from './properties/fonts'
import shadows from './properties/shadows'

import BoxStyle from './components/Box'
import ButtonStyle from './components/Button'

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
			},
			Button: {
				...ButtonStyle.light
			}
		},
		shadows: {...shadows.light}
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
			},
			Button: {
				...ButtonStyle.dark
			}
		},
		shadows: {...shadows.dark}
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
			},
			Button: {
				...ButtonStyle.moose
			}
		},
		shadows: {...shadows.moose}
	}
}

export default theme