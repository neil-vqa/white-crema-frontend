module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/*.html'],
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
