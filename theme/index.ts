import colors from './colors'
import styles from './styles'

const theme = {
	light: {
		colors,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.lightStyle
			}
		},
	},
	dark: {
		colors,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.darkStyle
			}
		},
	}, 
	moose: {
		colors,
		styles: {
			global: {
				...styles.globalStyle,
				...styles.mooseStyle
			}
		},
	}
}

export default theme