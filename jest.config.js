module.exports = {


  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
  preset: "react-native",
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json', // as specified by ts-jest
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [],

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};