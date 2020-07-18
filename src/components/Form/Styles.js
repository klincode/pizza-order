import styled from 'styled-components'


export const FormElement = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
width:700px;
margin:20px auto;
`
export const Input = styled.input`
padding:5px 10px;
width:100%;
line-height:2;
outline:0;
border:1px solid silver;
border-radius:4px;
`
export const Select = styled.select`
padding:5px 10px;
width:100%;
line-height:2;
outline:0;
border:1px solid silver;
border-radius:4px;
`

export const Label = styled.label`
display:flex;
flex-direction:column;
flex-direction:${props => props.row ? 'row' : 'column'};
/* color:${props => props.row ? 'red' : ''}; */
/* align-items:flex-start; */
margin:5px;
`
export const CheckBoxes = styled.label`
display:flex;
flex-direction:row;
width:200px;
margin:0 20px;
justify-content:center;
`

export const Caption = styled.div`
font-size:14px;
padding:3px;
color:#333;
`
export const SectionTitle = styled.h2`

font-size:15px;
text-transform:uppercase;
color:#000;
font-weight:600;
margin:25px 5px 0 5px;
`
export const Header = styled.h1`
  font-size: 20px;
  text-transform:uppercase;
  text-align:center;
  padding:15px 0;
  `

export const Order = styled.div`
 margin:5px;
 width:100%;
 border:1px solid silver;
 background-color:#f5f5f5;
 text-align:center;
font-weight:600;
 padding:10px 20px;
 border-radius:5px;
 `