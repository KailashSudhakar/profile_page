module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              
      dist: {                            
	options: {                       
	  style: 'expanded'
	},
	files: {                         
	  'assets/css/style.css': 'assets/scss/style.scss'       
	}
      }
    },
    watch: {
      files: ['assets/scss/style.scss'],
      tasks: 'default'
    }
  });



grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass']);

};
