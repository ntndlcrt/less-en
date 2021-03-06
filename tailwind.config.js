// Will generate different spacing values ((0.8rem based))
const generateSpacing = (pixelsBase, values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace('.', '_')}`] = `${(
            pixelsBase *
            v *
            0.1
        ).toFixed(1)}rem`
        return acc
    }, {})
}

// Will generate font sizes values with "rem" as unit
const generateFontSizes = (values) => {
    return values.reduce((acc, v) => {
        acc[v] = `${(v * 0.1).toFixed(1)}rem`
        return acc
    }, {})
}

const generateValues = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace('.', '_')}`] = v
        return acc
    }, {})
}

// Generate all kinds of percent classes from 1% to 150%
const generatePercent = () => {
    let percents = {}
    for (let p = 0; p <= 150; p++) {
        percents[p] = `${p}%`
    }
    return percents
}

module.exports = {
    important: true,
    corePlugins: {
        container: false,
    },
    mode: 'jit',
    // Allow to delete all unused styles from the final CSS file
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '1024px',
            lg: '1280px',
            'md-only': {
                min: '641px',
                max: '1024px',
            },
            'sm-only': {
                max: '640px',
            },
        },
        colors: {
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent',

            red: '#E85549',

            gray_light: '#a2a2a2',
            gray_dark: '#1e211f',
            gray: '#c4c5be',
            //gray_general: '#C4C0C7'
            //gray_general: '#DBD6CC'
            gray_general: '#D6D7CF'
        },
        borderRadius: {
            round: '50%',
            1: '0.8rem',
            full: '1000rem'
        },
        spacing: generateSpacing(
            8,
            [
                0, 0.25, 0.5, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9,
                10, 11, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 40, 48, 55,
            ]
        ),
        fontSize: generateFontSizes([10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 32, 56, 120, 140, 240]),
        lineHeight: generateValues([1, 1.2, 1.3, 1.4, 1.5, 1.6, 2]),
        fontWeight: generateValues([
            100, 200, 300, 400, 500, 600, 700, 800, 900,
        ]),
        inset: {
            ...generatePercent(),
            auto: 'auto',
        },
        translate: {
            ...generatePercent(),
            auto: 'auto',
        },
        width: {
            ...generatePercent(),
            auto: 'auto',
            full: '100%',
            screen: '100vw',
            content: 'fit-content',
        },
        height: {
            ...generatePercent(),
            auto: 'auto',
            full: '100%',
            screen: '100vh',
            content: 'fit-content',
        },
    },
}
