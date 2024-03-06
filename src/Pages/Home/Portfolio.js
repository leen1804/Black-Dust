import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
background: #000000;
padding-top: 13%;
padding-bottom: 10%;
h2{
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
  display: flex;
  color: #808080;
}


.second-h2{
  color: #FFFFFF;
}

.first-p{
  padding-top: 3%;
  padding-bottom: 5%;
  margin-left: 20px;
  margin-right: 90px;
  line-height: 1.4;
  color: #FFFFFF;
}

img{

  width: 40%;
  height: 120px;
  object-fit: cover;
  border-radius: 100%;
}

.divsAllCombo{
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 15px;
}

.div-1{
  display: flex;
  flex-direction: column;
  gap: 15px;

}
.div-2{
  display: flex;
  flex-direction: column;
  gap: 15px;

}

.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
  width: 90%;
  background: #808080;
  padding-bottom: 8%;
  border-radius: 30px;
  h3{
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 20px;

  }
  p{
    color: #000000;
    margin-left: 20px;
    line-height: 1.2;
  }
}

.color-div{
  width: 100%;
  display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;
  background: #D7D4D4;
  height: 170px;
  border-radius: 20px;
  /* &:nth-child(){
    background: #D7D4D4;
  }
  &:nth-child(2){
    background: #808080;
  }
  &:nth-child(3){
    background: #D7D4D4;
  } */
  
}





@media (min-width:768px) {
  .divsAllCombo{
    flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 0 25px;
}
  

img{
  width: 50%;
  height: 60px;
  object-fit: cover;
  border-radius: 0;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
  width: 30%;
  background: #808080;
  padding-bottom: 10%;
  padding-top: 0%;
  border-radius: 16%;
  h3{
    padding-top: 5%;
    padding-bottom: 3%;
    margin-left: 20px;

  }
  p{
    margin-left: 20px;
    line-height: 1.2;
  }
}

h2{
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
  display: flex;
}

.color-div{
  width: 100%;
  height: 140px;
  border-radius: 16%;
}


.first-p{
  padding-top: 3%;
  padding-bottom: 5%;
  margin-left: 40px;
  margin-right: 350px;
  line-height: 1.5;
}
}
@media (min-width:992px) {
  padding-top: 8%;
  padding-bottom: 22%;
  .divsAllCombo{
    /* flex-wrap: nowrap; */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 15px;
  margin: 0 30px;

  :nth-child(1){
    
  }
  :nth-child(2){
    transform: translateY(170px); /* Move the card 5 pixels down on hover */
  }
  :nth-child(3){
  }
  :nth-child(4){
    transform: translateY(170px); /* Move the card 5 pixels down on hover */
  }
  :nth-child(5){
  }
}
  

img{
  width: 50%;
  height: 60px;
  object-fit: cover;
  border-radius: 0;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
  width: 100%;
  background: #808080;
  padding-bottom: 9%;
  padding-top: 0%;
  border-radius: 30px;
  h3{
    position: relative;
    top: -144px;

    padding-top: 5%;
    padding-bottom: 3%;
    margin-left: 20px;

  }
  p{
    position: relative;
    top: 40px;
    margin-left: 20px;
    line-height: 1.2;
  }
  
}

h2{
  gap: 3px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
  display: flex;
}

.color-div{
  width: 100%;
  height: 140px;
  border-radius: 16%;
}


.first-p{
  padding-top: 3%;
  padding-bottom: 5%;
  margin-left: 40px;
  margin-right: 550px;
  line-height: 1.6;
}
}
@media (min-width:1200px) {
  padding-top: 7%;
padding-bottom: 19%;

  .divsAllCombo{
padding-top: 0%;
    /* flex-wrap: nowrap; */
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin: 0 90px;


  :nth-child(1){
    
  }
  :nth-child(2){
    transform: translateY(170px); /* Move the card 5 pixels down on hover */
  }
  :nth-child(3){
  }
  :nth-child(4){
    transform: translateY(170px); /* Move the card 5 pixels down on hover */
  }
  :nth-child(5){
  }
}
  

img{
  width: 50%;
  height: 110px;
  object-fit: cover;
  border-radius: 50px;
}
.card{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  background: #808080;
  padding-bottom: 9.5%;
  padding-top: 0%;
  border-radius: 55px;
  h3{
    position: absolute;
    top: 12px;
    padding-top: 5%;
    padding-bottom: 3%;
    margin-left: 20px;

  }
  p{
    position: relative;
    top: 50px;

    margin-left: 10px;
    line-height: 1.2;
  }
}

h2{
  gap: 3px;
  font-size: 55px;
  font-weight: bold;
  margin-left: 90px;
  display: flex;
}

.color-div{
  width: 100%;
  background: #D7D4D4;
  height: 170px;
  border-radius: 55px;
}


.first-p{
  font-size: 20px;
  padding-top: 3%;
  padding-bottom: 4%;
  margin-left: 90px;
  margin-right: 840px;
  line-height: 1.4;
}
}











`

function Portfolio() {
  return (
    <Wrapper>
    <div className='section'>
        <h2>Our <p className='second-h2'>Portfolio</p>
        </h2>
        <p className='first-p'> when an unkown printer took a gallery of type and script to make a type speciment book.</p>





        <div className='divsAllCombo'>

            {/* <div className='div-1'> */}

            <div className='card'>
                    <div className='color-div'>
                        <img src="./art/portfo-image-3.png" alt="" />
                    </div>

                    <h3>Emotions</h3>
                    <p> A moment of realisation. When one chooses to be courageous. When one chooses to stop running.
                        When one chooses to liberate themselves from their own thoughts.</p>
                </div>

               <div className='card'>
                    <div className='color-div'>
                        <img src="./art/portfo-image-3.png" alt="" />
                    </div>

                    <h3>Emotions</h3>
                    <p> A moment of realisation. When one chooses to be courageous. When one chooses to stop running.
                        When one chooses to liberate themselves from their own thoughts.</p>
                </div>

            {/* </div> */}

            {/* <div className='div-2'> */}
                <div className='card'>
                    <div className='color-div'>
                        <img src="./art/portfo-image-3.png" alt="" />
                    </div>

                    <h3>Emotions</h3>
                    <p> A moment of realisation. When one chooses to be courageous. When one chooses to stop running.
                        When one chooses to liberate themselves from their own thoughts.</p>
                </div>


                <div className='card'>
                    <div className='color-div'>
                        {/* <img src="./art/portfo-image-1.png" alt="" /> */}

                        <img src="./art/portfo-image-4.png" alt="" />
                    </div>
                    <h3>Serenity</h3>
                    <p> A moment of realisation. When one chooses to be courageous. When one chooses to stop running.
                        When one chooses to liberate themselves from their own thoughts.</p>
                </div>



                <div className='card'>
                    <div className='color-div'>
                        <img src="./art/portfo-image-5.png" alt="" />
                    </div>
                    <h3>Equality</h3>
                    <p> A moment of realisation. When one chooses to be courageous. When one chooses to stop running.
                        When one chooses to liberate themselves from their own thoughts.</p>
                </div>

            {/* </div> */}

        </div>




    </div>

    </Wrapper>
  )
}

export default Portfolio








// @media (min-width: 992px){
//   .div-1{
//   display: flex;
//   flex-direction: row;
// } 
// .divsAllCombo{
//   display: flex;
//   flex-direction: row;
//   gap: 15px;
//   margin: 0 30px;
// }

// .card{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   margin: 0 auto;
//   width: 100%;
//   background: red;
//   padding-bottom: 10%;
//   padding-top: 0%;
//   border-radius: 16%;
//   h3{
//     padding-top: 5%;
//     padding-bottom: 3%;
//     margin-left: 20px;

//   }
//   p{
//     margin-left: 20px;
//     line-height: 1.2;
//   }
// }
// }


// @media (min-width: 1200px) {
//   .divsAllCombo{
//   display: flex;
//   flex-direction: row;
//   gap: 35px;
//   margin: 0 95px;
// }


// .card{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   margin: 0 auto;
//   width: 100%;
//   background: red;
//   padding-bottom: 20%;
//   padding-top: 0%;
//   border-radius: 16%;
//   h3{
//     padding-top: 5%;
//     padding-bottom: 3%;
//     margin-left: 20px;

//   }
//   p{
//     margin-left: 20px;
//     line-height: 1.2;
//   }
// }



// .div-1{
//   display: flex;
//   gap: 40px;

// }
// .div-2{
//   display: flex;
//   gap: 40px;

// }
// }