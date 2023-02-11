module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                './build/styles/main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                }, 
                files: {
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        watch:{
            less: {
                files: ["./src/styles/**/*.less"],
                tasks: ['less:development']
                    
            }
        },
        replace:{
            dev: {
                options: {
                    patterns: [{
                        match: 'ENDEREÇO_DO_CSS',
                        replacement: './styles/main.css'
                    }]
                },
                files: [
                    {
                        expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'
                    }
                ]
            },

            dist: {
                options: {
                    patterns: [{
                        match: 'ENDEREÇO_DO_CSS',
                        replacement: './styles/main.min.css'
                    }]
                },
                files: [
                    {
                        expand: true, flatten: true, src: ['prebuild/index.html'], dest: 'dist/'
                    }
                ]
            },
            

        },
        htmlmin: {                                     
            dist: {                                      
                options: {                             
                removeComments: true,
                collapseWhitespace: true
                },
            files: {                                   
                'prebuild/index.html':'src/index.html',     
                }
            },
        }           
    }); 

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', "htmlmin:dist", "replace:dist"]);
}