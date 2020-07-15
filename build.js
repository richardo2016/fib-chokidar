const fs = require('fs')
const path = require('path')
const util = require('util')

process.run(process.execPath, [
    path.resolve(__dirname, `./node_modules/fib-typify/bin/ftsc.js`),
    'src/*', '--outDir', './lib'
])

if (util.buildInfo().fibjs >= '0.26.0') {
    process.run(process.execPath, ['rollup.build.js'])
} else {
    fs.copy(
        require.resolve('./lib/index.js'),
        path.resolve('./lib/index.cjs.js')
    )
}

    