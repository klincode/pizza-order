import styled from 'styled-components'
const img = process.env.PUBLIC_URL + "/images/banner2.jpg";

export const Header = styled.header`
display:flex;
justify-content:center;
align-items:center;
background-image:url(${img});
background-position:10% 90%;
background-size:cover;
background-repeat:no-repeat;
width:100%;
height:30vh;

color:#fff;
font-size:40px;
text-transform:uppercase;
/* background-color:red; */
`
