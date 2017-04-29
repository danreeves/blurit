import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import conditional from 'rollup-plugin-conditional';

const ENV = process.env.ENV || 'production';
const productionPlugins = conditional(ENV === 'production', [uglify()]);

export default [
    babel({
        exclude: 'node_modules/**',
        presets: [
            [
                'env',
                {
                    targets: {
                        browsers: ['last 2 versions', 'safari 8'],
                    },
                    modules: false,
                },
            ],
            'react',
        ],
        plugins: [
            'external-helpers',
            'styled-components',
            'transform-object-rest-spread',
            'transform-flow-strip-types',
        ],
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    resolve(),
    commonjs({
        namedExports: {
            'react': [
                'PropTypes',
                'createElement',
                'Component',
            ],
        },
    }),
    productionPlugins,
    filesize(),
];
