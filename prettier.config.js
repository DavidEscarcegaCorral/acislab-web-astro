// prettier.config.js
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],

    semi: true,
    singleQuote: true,
    tabWidth: 4,
    printWidth: 50,
};
