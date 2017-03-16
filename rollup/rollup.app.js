import plugins from './plugins';

const ENV = process.env.ENV || 'production';

export default {
    entry: './src/containers/app.js',
    dest: './dist/containers/app.js',
    format: 'cjs',
    external: ['styled-components'],
    plugins,
};
