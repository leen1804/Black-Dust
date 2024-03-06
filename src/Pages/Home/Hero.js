import React from 'react'
import styled from 'styled-components'



const Wrapper=styled.section`
background: url(../GirlsinStem/discover-image-3.png);
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

.black-background{
    display: flex;
    align-items: center;
    flex-direction: column;
    .first-h2{
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }
    .second-h2{
        font-size: 28px;
        font-weight: bold;
        text-align: center;
   padding: 0 30px;
   line-height: 1.3;
    }
    p{
        text-align: center;
        padding: 10px 30px;
        line-height: 1.3;
    }
    .btn-div{
        padding-top: 4%;
        display: flex;
        gap: 15px;
        justify-content: center;
    }
    img{
        display: none;
    }
    button{
        width: 140px;
        height: 50px;
        border-radius: 20px;
        border: none;
    }
}


@media (min-width: 768px) {
   height : 600px;
   .black-background{
    display: flex;
    align-items: center;
    flex-direction: column;
    .first-h2{
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }
    .second-h2{
        font-size: 28px;
        font-weight: bold;
        text-align: center;
   padding: 0 30px;
   line-height: 1.3;
    }
    p{
        text-align: center;
        padding: 10px 90px;
        line-height: 1.3;
    }
    .btn-div{
        padding-top: 4%;
        display: flex;
        gap: 15px;
        justify-content: center;
    }
    img{
        display: none;
    }
    button{
        width: 100px;
        height: 50px;
        border: none;
    }
}
}
@media (min-width: 992px) {
   height : 650px;
   .black-background{
    display: flex;
    align-items: center;
    flex-direction: column;
    .first-h2{
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }
    .second-h2{
        font-size: 28px;
        font-weight: bold;
        text-align: center;
   padding: 0 30px;
   line-height: 1.3;
    }
    p{
        text-align: center;
        padding: 10px 210px;
        line-height: 1.3;
    }
    .btn-div{
        padding-top: 4%;
        display: flex;
        gap: 15px;
        justify-content: center;
    }
    img{
        display: none;
    }
    button{
        width: 150px;
        height: 50px;
        border: none;
        font-size: 18px;
    }
}
}
@media (min-width: 1200px) {
   height : 130vh;
   justify-content: unset;
.text{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
   .black-background{
    width: 80%;
    height: 100vh;
    background: red;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: unset;
    flex-direction: row;
    .first-h2{
        text-align: unset;
        font-size: 55px;
        font-weight: bold;
    }
    .second-h2{
        font-size: 55px;
        font-weight: bold;
        text-align: unset;
   padding: 0 0px;
   line-height: 1.3;
   margin-left: 1px;
   margin-right: 100px;
    }
    p{
        text-align: unset;
        padding: 0px 0px;
        line-height: 1.3;
    }
    .btn-div{
        padding-top: 4%;
        display: flex;
        gap: 15px;
        justify-content: unset;
    }
    img{
        display: block;
        width: 35%;
        height: 500px;
        object-fit: cover;
    }
    button{
        width: 150px;
        height: 50px;
        border: none;
        font-size: 18px;
        border-radius: 10px;

    }
}
}
`
function Hero() {
  return (
    <Wrapper>
      <div className='black-background'>
        <div className='text'>
<h2 className='first-h2'>Black Dust</h2>
<h2 className='second-h2'>Graphite & Charcoal Dancing On Paper</h2>
<p>known as Black Dust as L enjoy working with black charcoal and graphite dust to create abstract realism pieces.</p>
<div className='btn-div'>
    <button>Shop Now</button>
    <button>Featured Work</button>
</div>
        </div>
        <img src="./art/main-hero-image.png" alt=""/>
      </div>
    </Wrapper>
  )
}

export default Hero
