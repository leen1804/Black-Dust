import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
background: #FFFFFF;
padding-bottom: 10%;
padding-top: 10%;
.text{
  display: none;
}
.imagesAllCombo{
  display: flex;
  flex-direction: column;
  gap: 10px;

}
.image-div-1{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.img-1{
  width: 90%;
  height: 240px;
  border-radius: 6%;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
}
.img-2{
  width: 90%;
  height: 240px;
  border-radius: 6%;
  object-fit: cover;
  display: flex;
  margin: 0 auto;

}
.img-3{
  width: 90%;
  height: 240px;
  border-radius: 6%;
  object-fit: cover;

  display: flex;
  margin: 0 auto;
}

.first-h2{
  display: flex;
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
  color: #000000;
}

.second-h2{
  color: #808080;
}

.first-p{
  padding-top: 3%;
  padding-bottom: 5%;
  margin-left: 20px;
  line-height: 1.3;

}

.last-p{
  padding-top: 8%;
  margin-left: 20px;
  line-height: 1.3;
color: #000000;
}




@media (min-width: 768px) {
  padding-top: 8%;
  .img-1{
  width: 70%;
  height: 220px;
  border-radius: 2%;
  object-fit: cover;
  display: flex;
  margin-left: 103px;
}
.img-2{
  width: 100%;
  height: 340px;
  border-radius: 6%;
  object-fit: cover;
  display: flex;
  margin: 0 auto;

}
.img-3{
  width: 100%;
  height: 240px;
  border-radius: 6%;
  object-fit: cover;

  display: flex;
  margin: 0 auto;
}

.imagesAllCombo{
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 30px;

}
.image-div-1{
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.image-div-2{
  width: 50%;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
}

.first-p{
  padding-top: 3%;
  padding-bottom: 5%;
  margin-left: 40px;
  margin-right: 250px;
  line-height: 1.3;

}

.last-p{
  padding-top: 8%;
  margin-left: 0px;
  line-height: 1.3;

}
.first-h2{
  display: flex;
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
}
}


@media (min-width: 992px) {
  .first-h2{
  display: flex;
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
}
.first-p{
  padding-top: 2%;
  padding-bottom: 3%;
  margin-left: 40px;
  margin-right: 530px;
  line-height: 1.3;

}
.img-1{
  width: 70%;
  height: 220px;
  border-radius: 8%;
  object-fit: cover;
  display: flex;
  margin-left: 142px;
}
}


@media (min-width:1200px) {
  padding-top: 4%;
  padding-bottom: 8%;
  .img-1{
  width: 60%;
  height: 270px;
  border-radius: 8%;
  object-fit: cover;
  display: flex;
  margin-left: 280px;
}
.img-2{
  width: 55%;
  height: 400px;
  border-radius: 6%;
  object-fit: cover;
  display: flex;
  margin-right:275px ;

}
.img-3{
  width: 100%;
  height: 290px;
  border-radius: 12%;
  object-fit: cover;

  display: flex;
  margin-left: 95px;
} 

.imagesAllCombo{
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 0 0px;

}

.image-div-1{
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.image-div-2{
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.first-h2{
  display: flex;
  gap: 3px;
  font-size: 55px;
  font-weight: bold;
  margin-left: 100px;
}
.first-p{
  font-size: 20px;
  padding-top: 2%;
  padding-bottom: 4%;
  margin-left: 100px;
  margin-right: 770px;
  line-height: 1.4;

}
.last-p{
  font-size: 20px;
  padding-top: 2%;
  margin-left: 111px;
  margin-right: 300px;
  line-height: 1.3;

}
.image-text{
position: relative;
}
.text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 55px;
  right: 93px;
  border-radius: 15%;
  width: 390px;
  padding-left: 2%;
  padding-top: 4%;
  padding-bottom: 4%;
  /* height: 290px; */
  background: #000000;
  h2{
    font-size: 55px;
    padding-bottom: 7%;
    font-weight: bold;
    color: #808080;

  }
  p{
    font-size: 20px;
    line-height: 1.2;
    margin-right: 20px;
    color: #FFFFFF;
  }
}
}
`


function About() {
  return (
    <Wrapper>
      <div className='section'>
        <h2 className='first-h2'>About <p className='second-h2'>ME</p></h2>
         <p className='first-p'>I go by the name Andiswa Bahana Matobo (1996) is a young lady born and raised inBulawayo, Zimbabwe.</p>

         <div className='imagesAllCombo'>
            <div className='image-div-1'>
            <img className='img-1' src="./art/aboutme-image-1.png" alt=""/>
            <img className='img-3' src="./art/aboutme-image-3.png" alt=""/>

            </div>

             <div className='image-div-2'>
                <div className='image-text'>

                <img className='img-2'  src="./art/aboutme-image-2.png" alt=""/>

                <div className='text'>
                    <h2>Biography</h2>
                    <p>I am a self-taught artist, whose art career was established during the 2020 Covid lock down era and Being moulded from black African dust herself. As a pencil- artist also exploring other mediums, she gathers her inspiration from her personal.</p>
                </div>

                </div>
             
            <p className='last-p'>past experiences, present emotions and future aspirations. To date she hasexhibited at the Art of Health (2022) ,the Go Nature Go, GMAC Trust exhibitions and has participated in the Jacaranda
            Art Fair (2022).
            </p>
             </div>

         </div>
      </div>
    </Wrapper>
  )
}

export default About
