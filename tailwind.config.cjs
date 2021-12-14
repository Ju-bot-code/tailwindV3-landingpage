module.exports = {
  mode:'jit',
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-gray-blue": "hsl(210, 10%, 33%)",
        "grey-blue": "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        "hero-desktop": "url('./src/images/bg-header-desktop.png')",
        "hero-mobile": "url('./src/images/bg-header-desktop.png')",
      },
    },
    fontFamily:{
      BaiJamjuree:"Bai Jamjuree ,sans-serif",
    },
    container:{
      center:true,
      padding:'1rem',
      screens:{
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      }
    }

  },
  plugins: [],
}
