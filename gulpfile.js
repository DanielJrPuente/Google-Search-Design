const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function css(done) {
    
    src("src/scss/**/*.scss")// indetify file sass
        .pipe( sass())//compile
        .pipe(dest("build/css")); //Save in store
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css)//Watching all scss files and execute css function when meke changes

    done();
}

exports.css = css;
exports.dev = dev;
