module.exports = function(grunt){
	var defaultTask;

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// tasks
		browserify : {
		    app : {
                options : {
                    transform : [
                        [ "babelify", { loose: "all" }]
                    ]
                },
		        files : {
		            'public/js/app.min.js' : 'public/js/app.js'
		        }
		    }
		},

        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> App Js File built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app : {
                options : {
                    ascii_only : true,
                    beautify : false
                },
                src  : 'public/js/app.js',
                dest : 'public/js/app.min.js'
            }
        },

		jshint : {
            options : {
                globals : {
                    '_'         : true,
                    'Promise'   : true,
                    'Hammer'    : true,
                    '$'         : true,
                    'jQuery'    : true,
                    'express'   : true
                },
                curly       : true,
                eqeqeq      : true,
                undef       : true,
                node        : true,
                browser     : true,
                devel       : true,
                validthis   : true,
                sub         : true,
                '-W097'     : true,
                '-W044'     : true
            },
            app : ['gruntfile.js', 'app/**/*.js']
        },

		compass : {
			dist : {
				options : {
					specify : 'public/sass/style.scss',
					banner : '/* dadocreate.com by Davide Fortuna (davidefortuna@gmail.com) */\n',
					sassDir : 'public/sass',
					cssDir : 'public/css',
					outputStyle : 'compact'
				}
			}
		},

		watch : {
			options : {
				livereload 	: true,
				spawn 		: false
			},
			js : {
                files : 'public/js/**/*.js',
                tasks : ['js', 'js-min']
            },
			sass : {
				files : ['public/sass/**/*.scss'],
				tasks : ['compass']
			}
		}
	});

	// Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');

	// Register the default tasks.
	defaultTask = ['jshint:app', 'browserify:app'];

    grunt.registerTask('default', defaultTask);
    grunt.registerTask('js', defaultTask);
    grunt.registerTask('js-min', ['uglify:app']);
};
