import React from 'react'
import styled from 'styled-components'



 const Wrapper =styled.section`
 padding-top: 10%;
 padding-bottom: 10%;
 .blackSection{
  width: 90%;
  padding-top: 16%;
  padding-bottom: 10%;
  border-radius: 20px;
  background:#000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
 }
 .text-div-2{
  display: none;
 }
 img{
  width: 90%;
  display: flex;
  margin: 0 auto;
 }
 .hr-div{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
h4{
  color: #808080;
}
 }
 hr{
  display: flex;
  border: none;
  height: 1px;
  width: 20%;
  background: #808080;
 }
 h2{
  padding: 20px 0;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  color: #FFFFFF;
 }

.input-div{
position: relative;
}
button{
  width: 90px;
  height: 30px;
  font-weight: bold;
position: absolute;
top: 12px;
right: 30px;
background: #000000;
color: #B0B0B0;
border-radius: 7px;
}
 .input{
position: relative;
width: 90%;
height: 50px;
display: flex;
margin: 0 auto;
border: none;
border-radius: 12px;
justify-content: center;
 }

 .h4{
  padding-top: 5%;
  padding-bottom: 5%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #808080;
 }




 @media (min-width: 768px) {
  padding-top: 6%;
 padding-bottom: 6%;

  .blackSection{
  width: 90%;
  padding-top: 5%;
  padding-bottom: 5%;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
 }
 img{
  width: 90%;
  display: flex;
  margin: 0 auto;
 }

 .text-div{
  width: 50%;
 }

 .image-text-div{
  width: 50%;

 }
 }


 @media (min-width: 992px) {
  .blackSection{
  width: 95%;
  padding-top: 5%;
  padding-bottom: 5%;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
 }
 img{
  width: 60%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left: 200px;
 }

 .text-div{
  width: 40%;
  margin-left: 20px;
 }
 .text-div-2{
  width: 38%;
  padding-left: 20px;
  height: 120px;
  padding-top: 20px;
  background: #808080;
  top: 70px;
  left: 40px;
  position: absolute;
  display: block;
 }

 .image-text-div{
  position: relative;
  width: 60%;

 }

 .hr-div{
  display: flex;
  align-items: center;
  justify-content: unset;
  gap: 5px;
margin-left: 20px;
 }
 hr{
  display: flex;
  border: none;
  height: 1px;
  width: 15%;
 }
 }

 @media (min-width: 1200px) {
  padding-top: 6%;
  padding-bottom: 6%;
background: #FFFFFF;
  .blackSection{
  width: 87%;
  padding-top: 4%;
  padding-bottom: 4%;
  border-radius:45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
 }
 img{
  width: 55%;
  height: 310px;
  object-fit: cover;
  display: flex;
  margin-left:260px;
 }

 .text-div{
  width: 40%;
  margin-left: 30px;
 }
 .text-div-2{
  width: 38%;
  padding-left: 20px;
  height: 180px;
  padding-top: 25px;
  border-radius: 7%;
  top: 60px;
  left: 40px;
  position: absolute;
  display: block;
  h3{
    color: #000000;
    padding-bottom: 6%;
  }
  p{
    font-size: 20px;
    line-height: 1.3;
    margin-right: 39.6px;
  }
 }

 .image-text-div{
  position: relative;
  width: 60%;

 }

 .hr-div{
  display: flex;
  align-items: center;
  justify-content: unset;
  gap: 5px;
margin-left: 30px;
 }
 hr{
  display: flex;
  border: none;
  height: 1px;
  width: 15%;
 }

 h2{
  color: #FFFFFF;
  font-size: 55px;
  text-align: left;
  line-height: 1.3;
  margin-left: 30px;
 }
 .input{
position: relative;
width: 90%;
height: 42px;
display: flex;
margin: 0 auto;
border: none;
border-radius: 7px;
justify-content: center;
 }
 button{
  width: 90px;
  height: 30px;
position: absolute;
top: 7px;
color: #B0B0B0;
border: none;
background: #000000;
right: 30px;
}
 }

 `
function Subscribe() {
  return (
    <Wrapper>
      <div className='blackSection'>
<div className='text-div'>
<div className='hr-div'>
    <hr/>
    <h4>Subscribe Now</h4>
 </div>

    <h2>Subscribe to our Newsletter</h2>
    <div className='input-div'>
        <input className='input' type='text' placeholder='Add Your Email Here'/>
        <button>Subscribe</button>
    </div>
    <h4 className='h4'>Already a member? <p>Sign in.</p></h4>
</div>
{/* end  */}

<div className='image-text-div'>
<img src="./art/subscribe-image.png" alt=""/>
<div className='text-div-2'>
    <h3>Black Dust</h3>
    <p>We have the Community to sharing more motion about us,to get our promo you can leave an email in these form below

</p>
</div>
</div>

      </div>
    </Wrapper>
  )
}

export default Subscribe
