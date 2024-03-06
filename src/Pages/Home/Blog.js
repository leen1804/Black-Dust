import React from 'react'
import styled from 'styled-components'



const Wrapper= styled.section`
padding-top: 8%;
padding-bottom: 8%;
img{
    width: 100%;
}

.img-p{
    padding-top: 2%;
display: flex;
align-items: center;
margin-left: 10px;
gap: 5px;
}

.round{
    width: 10%;
    border-radius: 100%;
}
.cardsAllCombo{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.cards{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: grey;
    border-radius: 8%;
    padding-bottom: 6%;
    .h3{
        padding-top: 8%;
        padding-bottom: 3%;
        margin-left: 10px;
    }
    p{
margin-left: 10px;
padding-bottom: 2%;
line-height: 1.2;
    }
    h5{
        margin-right: 10px;
    }
    a h3{
        margin-left: 10px;
    }
    .h3-p{
display: flex;
justify-content: space-between;
    }
    h4{
        margin-left: 10px;
 
    }
}
.first-h2{
    display: flex;
    gap: 5px;
font-size: 28px;
font-weight:bold;
margin-left: 20px;
padding-bottom: 6%;
}
.second-h2{
    font-size: 28px;
font-weight:bold;
}




@media(min-width: 768px) {
    .cardsAllCombo{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 0 30px;
}
.cards{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: grey;
    border-radius: 8%;
    padding-bottom: 3%;
    .h3{
        padding-top: 8%;
        padding-bottom: 3%;
        margin-left: 10px;
    }
    p{
margin-left: 10px;
padding-bottom: 2%;
line-height: 1.2;
    }
    h5{
        margin-right: 10px;
    }
    a h3{
        margin-left: 10px;
    }
    .h3-p{
display: flex;
justify-content: space-between;
    }
    h4{
        margin-left: 10px;
 
    }
}
.round{
    width: 15%;
    border-radius: 100%;
}   
}
@media(min-width: 992px) {
    .cardsAllCombo{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 0 90px;
}  
.cards{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: grey;
    border-radius: 8%;
    padding-bottom: 4%;
    .h3{
        padding-top: 8%;
        padding-bottom: 3%;
        margin-left: 10px;
    }
    p{
margin-left: 10px;
margin-right: 30px;
padding-bottom: 2%;
line-height: 1.2;
    }
    h5{
        margin-right: 10px;
    }
    a h3{
        margin-left: 10px;
    }
    .h3-p{
display: flex;
justify-content: space-between;
    }
    h4{
        margin-left: 10px;
 
    }
} 
.first-h2{
    display: flex;
    gap: 5px;
font-size: 28px;
font-weight:bold;
margin-left: 40px;
padding-bottom: 6%;
}
}
@media(min-width: 1200px) {
    .cardsAllCombo{
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 0 90px;
} 

.round{
    width:7%;
    border-radius: 100%;
}  
.cards{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: grey;
    border-radius: 8%;
    padding-bottom: 4%;
    .h3{
        padding-top: 8%;
        padding-bottom: 3%;
        margin-left: 10px;
    }
    p{
margin-left: 10px;
margin-right: 30px;
padding-bottom: 2%;
line-height: 1.2;
    }
    h5{
        margin-right: 10px;
    }
    a h3{
        margin-left: 10px;
    }
    .h3-p{
display: flex;
justify-content: space-between;
    }
    h4{
        margin-left: 10px;
 
    }
} 
.first-h2{
    display: flex;
    gap: 5px;
font-size: 55px;
font-weight:bold;
margin-left: 90px;
padding-bottom: 5%;
}
.second-h2{
    font-size: 55px;
font-weight:bold;
}
.img-p{
    padding-top: 5%;
display: flex;
align-items: center;
margin-left: 10px;
gap: 2px;
}
}
`
function Blog() {
  return (
    <Wrapper>
      <div className='section'>
<h2 className='first-h2'>Our<p className='second-h2'> Blog</p></h2>

<div className='cardsAllCombo'>

    <div  className='cards'>
    <img src="./art/blog-image-3.png" alt=""/>
    <h3 className='h3'>24/7 Customer Service</h3>
    <p>Fashion is a form of self, expression and when an unknown printer took a gallery of type and script to ......</p>
    <div className='h3-p'>
        <a><h3>Read more</h3></a>
        <h5>Jun 06, 2024</h5>
    </div>

    <div className='img-p'>
    <img className='round' src="./art/aboutme-image-1.png" alt=""/>
        <h4>Zoey_Williams</h4>
    </div>
    </div>

    <div  className='cards'>
    <img src="./art/blog-image-3.png" alt=""/>
    <h3 className='h3'>24/7 Customer Service</h3>
    <p>Fashion is a form of self, expression and when an unknown printer took a gallery of type and script to ......</p>
    <div className='h3-p'>
        <a><h3>Read more</h3></a>
        <h5>Jun 06, 2024</h5>
    </div>

    <div className='img-p'>
    <img className='round' src="./art/aboutme-image-1.png" alt=""/>
        <h4>Zoey_Williams</h4>
    </div>
     </div>

     <div  className='cards'>
     <img src="./art/blog-image-3.png" alt=""/>
    <h3 className='h3'>24/7 Customer Service</h3>
    <p>Fashion is a form of self, expression and when an unknown printer took a gallery of type and script to ......</p>
    <div className='h3-p'>
        <a><h3>Read more</h3></a>
        <h5>Jun 06, 2024</h5>
    </div>

    <div className='img-p'>
    <img className='round' src="./art/aboutme-image-1.png" alt=""/>
        <h4>Zoey_Williams</h4>
    </div>
    </div>

</div>
      </div>
    </Wrapper>
  )
}

export default Blog
