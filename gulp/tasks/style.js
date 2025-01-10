'use strict';

const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const clean = require("gulp-clean-css");
const concat = require('gulp-concat');
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");
const bs = browserSync.create();

module.exports = async function style() {
    const autoprefixer = (await import("gulp-autoprefixer")).default;

    return src("src/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(bulk())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 8 versions", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 9", "iOS >= 6", "Opera >= 12", "Safari >= 6"]
        }))
        .pipe(clean({
            level: 2
        }))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write("../sourcemaps/"))
        .pipe(dest("build/css/"))
        .pipe(bs.stream());
}
