import plugins from './plugins';

export default {
    entry: './src/client.js',
    dest: './dist/client.js',
    format: 'iife',
    plugins,
};
