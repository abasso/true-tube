import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
//paths are relative to the execution path
export default {
  entry: 'src/main-aot.js',
  dest: 'aot/dist/build.js', // output a single application bundle
  sourceMap: true,
  sourceMapFile: 'aot/dist/build.js.map',
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings
    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    // intercepts in some rollup versions
    //if ( warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1 ) { return; }
    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['node_modules/rxjs/**',
                'node_modules/ngx-swiper-wrapper/**',
                'node_modules/angulartics2/**/*',
                'node_modules/angulartics2/dist/providers/ga/angulartics2-ga.js',
                'node_modules/moment/**',
                'node_modules/angular2-jwt/angular2-jwt.js'
              ],
      namedExports: {
        'node_modules/angulartics2/dist/index.js': [ 'Angulartics2' ]
      }
    }),
    uglify()
  ]
}
