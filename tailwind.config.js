module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/*.html','./dist/about/*.html','./dist/contact/*.html'],
  },
  theme: {
    extend: {
    	fontFamily: {
    		head: ['Montserrat'],
    		body: ['Lato']
    	}
    },
  },
  variants: {},
  plugins: [],
}
