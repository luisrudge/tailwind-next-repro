module.exports = {
  theme: {
    customForms: (theme) => ({
      invalid: {
        "input, textarea, multiselect, checkbox, radio, select": {
          backgroundColor: theme("colors.red.100"),
          borderColor: theme("colors.red.400"),
          "&::placeholder": {
            color: theme("colors.red.500"),
            opacity: "1",
          },
          "&:focus": {
            outline: "none",
            boxShadow: `0 0 0 3px ${theme("colors.red.400")}`,
            borderColor: theme("colors.red.400"),
          },
        },
        select: {
          color: theme("colors.red.500"),
        },
      },
    }),
    aspectRatio: {
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
    linearGradientDirections: {
      r: "to right",
    },
    linearGradientColors: {
      "pink-purple": ["#ed64a6", "#8d49eb"],
      "pink-purple-darker": ["#c5357a", "#6131a5"],
    },
    extend: {
      height: {
        tiny: "2px",
        frame: "48rem",
      },
    },
  },
  variants: {
    linearGradients: ["active"],
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-background-extended")(),
    require("tailwindcss-gradients"),
    require("tailwindcss-aspect-ratio"),
  ],
};
