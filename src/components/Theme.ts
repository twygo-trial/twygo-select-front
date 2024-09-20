import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';

chakraTheme.components

const twygoTheme = extendBaseTheme({
    colors: {
        primary: "rgb(147, 73, 222)"
    },
    components: {
        ...chakraTheme.components,
        Button: {
            baseStyle: {
                backgroundColor: "primary",
                color: "white",
                borderRadius: "full",
                paddingX: "24px",
                paddingY: "16px",
            },
        }
    },
});

export default twygoTheme;