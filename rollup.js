import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'app/main.js',
  dest: 'public/build.js', // output a single application bundle
  sourceMap: true,
  format: 'iife',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/core-js/client/shim.min.js',
        include: 'node_modules/zone.js/dist/zone.js',
        include: 'node_modules/reflect-metadata/Reflect.js',
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}
