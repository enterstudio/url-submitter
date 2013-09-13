module.exports = function(grunt) {

    var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                    ' *  License: <%= pkg.license %> */\n';

    var name = '<%= pkg.name %>-v<%= pkg.version%>';

    grunt.initConfig({


        jshint : {

            all : [ 'test/**/*.js' , '/app/js/app/**/*.js' , '/app/**/*.tpl' , "Gruntfile.js"]

        } ,

        mocha : {

            all : ['test/**/*.html'] , 

            options : {

                log : 'true' , 

                reporter: 'Spec'


            } 

        } , 

        watch : {

            files : ['app/javascript/app/**/*.js', 'test/**/*.js' , 'test/**/*.html' , 'app/less/**/*.less'] , 

            tasks : ['mocha' , 'jshint' , 'less:development']

        } , 

        blanket_mocha: {

            all: [ 'test/test.html' ],

            options: {

                threshold: 80

            }
        } , 

        requirejs: {

          compile: {

            options: {

              name : "app", 

              baseUrl: "app/javascript/vendor",

              mainConfigFile: "app/javascript/app.js",

              out: "app/javascript/dist/coverage.js"

            }
          }
        } , 

        less : {

            development : {

                files: {
                    
                    "app/css/styles.css" : "app/less/styles.less"
                
                }

            }

        } , 

        docco: {

          debug: {

            src: ['app/javascript/app/**/*.js'],

            options: {

              output: 'docs/'

            }

          }

        }

    }); 

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-mocha');

    grunt.loadNpmTasks('grunt-blanket-mocha');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-docco');

    grunt.registerTask('default', ['jshint' , 'mocha' , 'blanket_mocha' , 'requirejs'  , 'docco']);

    grunt.registerTask('test'  , ['mocha' , 'jshint' , 'blanket_mocha']);

    grunt.registerTask('optimize' , ['requirejs']);

    grunt.registerTask('dev' , ['watch']);


}; 