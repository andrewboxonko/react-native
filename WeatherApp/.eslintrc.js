module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    }
};
