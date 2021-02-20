const base = {
    variants: {
        moose: {
            borderRadius: "8px",
            transition: "background-color 200ms ease",
            boxShadow: "button",
            transform: "translateY(-2px)",
        },
        moose_hover: {
            boxShadow: "hover",
            transform: "translateY(-3px)",
        },
        moose_pressed: {
            boxShadow: "pressed",
            transform: "translateY(1px)",
        }
    },
    defaultProps: {
        variant: "moose",
    }
}

const light = {
    variants: {
        moose: {
            ...base.variants.moose,
            bg: "moose.800",
            color: "maple.50",

            _hover: {
                ...base.variants.moose_hover,
                bg: "moose.500"
            },

            _active: {
                ...base.variants.moose_pressed,
                bg: "moose.100",
                color: "moose.800"
            }
        }
    },
    defaultProps: { ...base.defaultProps }
}

const dark = {
    variants: {
        moose: {
            ...base.variants.moose,
            bg: "maple.50",
            color: "moose.800",

            _hover: {
                ...base.variants.moose_hover,
                bg: "maple.300"
            },

            _active: {
                ...base.variants.moose_pressed,
                bg: "moose.500",
                color: "maple.50",
            }
        }
    },
    defaultProps: { ...base.defaultProps }
}

const moose = {
    variants: {
        moose: {
            ...base.variants.moose,
            bg: "maple.50",
            color: "moose.800",

            _hover: {
                ...base.variants.moose_hover,
                bg: "maple.300"
            },

            _active: {
                ...base.variants.moose_pressed,
                bg: "moose.800",
                color: "maple.50",
            }
        }
    },
    defaultProps: { ...base.defaultProps }
}

const ButtonStyle = {
	light,
	dark,
	moose
}

export default ButtonStyle