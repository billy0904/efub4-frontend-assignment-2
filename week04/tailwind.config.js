/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      'Purple/1': '#AB78FF',
      'Purple/2': '#B98FFF',
      'Purple/3': '#D3B8FF',
      'White': '#FFFFFF',
      'Gray/2': '#666666',
      'Gray/3': '#999999',
      'Gray/4' : "#CCCCCC",
      'Gray/5': '#EDEDED',
      'Black': '#000000',
    },
    extend: {
      width: {
        'width': '375px',
        'inputWidth':'308px',
      },
      height: {
        'height': '812px',
        'topBarHeight': '52px', 
        'headerHeight': '48px', 
        'messageAreaHeight':'631px',
        'chatBarHeight': '68px', 
        'inputHeight': '40px', 
        'indicatorHeight': '13px', 
        'navBarHeight': '70px',
        'ChatRoomComponentHeight': '76px',
        'profileTitleHeight': '86px',
      },
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/line-clamp'),
  ],
}
