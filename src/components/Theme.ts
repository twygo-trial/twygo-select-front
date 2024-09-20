import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';

const twygoTheme = extendBaseTheme({
    colors: {
        primary: "rgb(147, 73, 222)",
    },
    components: {
        Button: {
            baseStyle: {
                backgroundColor: "primary",
                color: "white",
                borderRadius: "full",
                paddingX: "24px",
                paddingY: "16px",
            },
        },
        sizes: {
            lg: {
            fontSize: "lg",
            height: "48px",
            width: "auto",
            },
        },
    },
});

export default twygoTheme;