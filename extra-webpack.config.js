const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
                ecma: undefined,
                warnings: false,
                parse: {},
                compress: {
                    warnings: false, // Suppress uglification warnings
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true
                },
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false
            }
        })]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};