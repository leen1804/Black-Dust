import React from 'react'
import styled from 'styled-components'

const Wrapper =styled.section`
background: #000000;
padding-bottom: 10%;
padding-top: 5%;
.image{
  width: 70%;
  height: 120px;
  object-fit: cover;
  display: flex;
  border: 1px solid #808080;
  margin-left: 20px;
}

.iconz{
  width: 20%;
}
.icon-div{
  margin-left: 20px;
  display: flex;
  gap: 10px;
  padding-bottom: 8%;
}
.first-h2{
  padding-top: 12%;
  padding-bottom: 3%;
  display: flex;
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
  gap: 5px;
  color: #808080;
}

.second-h2{
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
}



.text-div{
padding-top: 12%;
  display: flex;
  gap: 50px;
  margin-left: 20px;
  flex-wrap: wrap;
}

.text-1{
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.text-2{
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.text-3{
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.service{
  padding-bottom: 9%;
  color: #FFFFFF;
}
a h3{
  color: #808080;
}



@media (min-width: 768px){
  padding-bottom: 5%;
padding-top: 0%;

  .contactAllCombo{
display: flex;
flex-direction: row;
  }
  .text-div{
    width: 50%;
padding-top: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-right: 20px;
}
.div-1{
  width: 50%;
}
.service{
  width: max-content;
  padding-bottom: 9%;
  color: #FFFFFF;
}
}


@media (min-width: 992px){
  padding-bottom: 3%;
  padding-top: 3%;
  .contactAllCombo{
display: flex;
gap: 40px;
flex-direction: row;
  }
  .text-div{
    width: 50%;
padding-top: 0;
  display: flex;
  gap: 50px;
  margin-left: 20px;
}
.div-1{
  width: 50%;
}

.image{
  width: 90%;
  height: 200px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
}

.text-1{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.text-2{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.text-3{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
}
@media (min-width: 1200px){
  padding-bottom: 6%;
  padding-top: 4%;
  .contactAllCombo{
display: flex;
gap: 60px;
flex-direction: row;
  }
  .text-div{
    width: 50%;
padding-top: 0;
  display: flex;
  gap: 60px;
  margin-right: 100px;
}
.div-1{
  width: 50%;
}

.image{
  width: 48%;
  height: 150px;
  object-fit: cover;
  display: flex;
  margin-left: 90px ;
  border: 1px solid #808080;
}

.text-1{
  display: flex;
  flex-direction: column;
  gap: 30px;

  a{
    font-size: 18px;
  }
}
.text-2{
  display: flex;
  flex-direction: column;
  gap: 30px;
  a{
    font-size: 18px;
  }
}
.text-3{
  display: flex;
  flex-direction: column;
  gap: 30px;
  a{
    font-size: 18px;
  }
}
.first-h2{
  padding-top: 4%;
  padding-bottom: 3%;
  display: flex;
  font-size: 55px;
  font-weight: bold;
  margin-left: 90px;
  gap: 5px;
}

.second-h2{
  font-size: 55px;
  font-weight: bold;
}
.iconz{
  width: 15%;
}
.icon-div{
  margin-left: 90px;
  display: flex;
  gap: 10px;
  padding-bottom: 11%;
}
}



`
function Contact() {
  return (
    <Wrapper>
      <div className='section'>
<h2 className='first-h2'>Contact<h2 className='second-h2'> Us</h2></h2>


<div className='contactAllCombo'>

<div className='div-1'>
    <div className='icon-div'>
    <img className='iconz' src="./art/contactus-image.png" alt=""/>
    <img className='iconz' src="./art/contactus-image.png" alt=""/>
    <img className='iconz' src="./art/contactus-image.png" alt=""/>
    </div>
    <img className='image' src="./art/contactus-image.png" alt=""/>
</div>


<div className='text-div'>
<div className='text-1'>
   <a className='service' href='#'><h3>Service</h3></a> 
   <a href='#'><h3>About us</h3></a> 
   <a href='#'><h3>Features</h3></a> 
   <a href='#'><h3>Blog</h3></a> 

</div>

<div className='text-2'>
<a className='service' href='#'><h3>Our Benefit</h3></a> 
   <a href='#'><h3>How we work</h3></a> 
   <a href='#'><h3>Press Room</h3></a> 
</div>

<div className='text-3'>
<a className='service' href='#'><h3>Support</h3></a> 
   <a href='#'><h3>Terms of use</h3></a> 
   <a href='#'><h3>Privacy Policy</h3></a> 
   <a href='#'><h3>Security Policy</h3></a> 
   <a href='#'><h3>Cookie Settings</h3></a> 

</div>

</div>

</div>










      </div>
    </Wrapper>
  )
}

export default Contact
