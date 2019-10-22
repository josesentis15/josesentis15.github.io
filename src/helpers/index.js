import { css } from "styled-components";

const media = {
    mobile: (...args) => css`
        @media (max-width: 767px) {
            ${css(...args)};
        }
    `,
    tablet: (...args) => css`
        @media (min-width: 768px) {
            ${css(...args)};
        }
    `,
    desktop: (...args) => css`
        @media (min-width: 1024px) {
            ${css(...args)};
        }
    `,
    desktop_large: (...args) => css`
        @media (min-width: 1280px) {
            ${css(...args)};
        }
    `
};

const vars = {
    layout: {
        gap: 24,
        maxContentWidth: 1440
    },
    font: {
        family_text: '"Helvetica Neue", Helvetica, sans-serif',
        family_special: '"Space Mono", monospace',
        weight: 400,
        size: {
            smaller: 12,
            small: 14,
            base: 16,
            big: 18
        },
        lineHeight: {
            base: 30
        }
    },
    transition: {
        base: 0.3
    },
    colors: {
        white: "#fcf9f9",
        black: "#0c0421",
        dark: "#25234c",
        primary: "#7869e5",
        secondary: "#ffd8d",
        error: "#ce2e8f",
        gradient: "linear-gradient(136deg, #3023AE 0%, #C96DD8 100%)",
        rgb: {
            white: "252, 249, 249",
            black: "12, 4, 33",
            dark: "37, 35, 75",
            primary: "120, 105, 299",
            secondary: "255, 216, 221",
            error: "206, 46, 143"
        }
    }
};

const mixins = {
    space: n => `${vars.layout.gap * n / vars.font.size.base}rem`,
    font: n => `${vars.font.size.base * n / vars.font.size.base}rem`,
    line: n => `${vars.font.lineHeight.base * n / vars.font.lineHeight.base}rem`,
    vr: n => `${vars.font.lineHeight.base * n / vars.font.size.base}rem`,
    translate: (x, y) => `translate(${x}, ${y})`,
    transition: t =>
        `all ${
            t ? t : vars.transition.base
        }s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
};

export { media, mixins, vars };
