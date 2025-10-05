/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#1D1D1F',
        navigationBackground:'#EDF2F7',
        boxfill:'#FEFEFE',
        screenbackground:'#F4F7FB',
        radiusColor:"#EEEEEE",
      }
    },
  },
  plugins: [],
}