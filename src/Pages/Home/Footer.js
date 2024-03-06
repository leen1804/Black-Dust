import React from 'react'
import styled from 'styled-components'


const Wrapper =styled.section`
padding-top: 5%;
padding-bottom: 5%;
background: #808080;

p{
  text-align: center;
  padding: 0 20px;
  line-height: 1.3;
}

@media (min-width: 768px){
  padding-top: 1.5%;
padding-bottom: 1.5%;

}

@media (min-width:1200px){
  
}
`
function Footer() {
  return (
    <Wrapper>
     <p>@ Copyright 2024 Production. Designed by Busisomoyo15@gmail.com All rights reserved.</p>
    </Wrapper>
  )
}

export default Footer
