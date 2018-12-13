const gulp = require("gulp");
const replace = require('gulp-replace');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const typedoc = require("gulp-typedoc");
const del = require("del");
const inline = require("gulp-inline-template");

gulp.task("build:inline", function () {
  return gulp.src(["src/**/*.ts"])
    .pipe(inline())
    .pipe(tsProject())
    .pipe(gulp.dest("dist"));
});

gulp.task("build:clean", function() {return del(["dist/**"]);});

gulp.task('watch',function(){
  gulp.watch('./src/**/*',['build:inline']);
  gulp.watch('./test/**/*',['build:inline']);
});

gulp.task("doc:ts", function() {
    return gulp.src(["src/**/*.ts"])
      .pipe(replace(/^[\s]*\*[\s]*\@example(?:(?!\*\/).|\n)*?^[\s]*\*\/$/mg, function(e){
        e = e.replace("@example", "@example\n * ```Typescript\n * ");
        e = e.substr(0, e.length-3) + " * ```\n" + " \*\/\n";
        return e;
      }))
      .pipe(gulp.dest("src_doc"));
});

gulp.task("doc:type", function() {
  return gulp.src(["src_doc/**/*.ts"])
    .pipe(typedoc({
        module: "commonjs",
        target: "es2015",
        out: "docs/",
        name: "Ralltiir-Skeleton",
        hideGenerator: true,
        version: false,
        theme: "minimal", // markdown | minimal | default
        mode: "file",
        exclude: [""],
        excludePrivate: true,
        excludeProtected: true,
        help: false,
        readme: "README.md"
    }));
});
gulp.task("doc:clean", function() {return del(["src_doc/**"]);});

gulp.task('doc', gulp.series('doc:ts','doc:type' , 'doc:clean'));
gulp.task('default', gulp.series('build:clean', 'build:inline'));
