import {createGlobalStyle} from "styled-components";
import questionMarkImage from './assets/questionMarksBackground.jpg'
import AndadaFormat from './fonts/AndadaPro-Regular.ttf'

const PagesStyle = createGlobalStyle`
@font-face {
    font-family: 'Andada';
    src: url(${AndadaFormat}) format('truetype');
  }
  body {
   background:url(${questionMarkImage});
   font-family: 'Andada';
  }
    `

export default PagesStyle
