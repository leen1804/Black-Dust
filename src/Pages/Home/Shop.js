import React from 'react'
import styled from 'styled-components'



const Wrapper=styled.section`
background: #000000;
padding-bottom: 12%;
padding-top: 15%;
.main-div-routing{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.link-div{
  display: flex;
  padding-top: 5%;
  padding-bottom: 9%;
  gap: 12px;
  margin-left: 20px;
}
.icon-div{
  display: flex
}
.icon{
  width: 30%;
  height: 30px;
  object-fit: cover;
  border-radius: 100%;
}
.first-h2{
  margin-left: 20px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  gap: 5px;
  color: #FFFFFF;
}
.second-h2{
  color: #808080;
}
img{
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5%;

}
.imgdiv{
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
/* background: ; */
padding-bottom: 6%;
border-radius: 5%;
p{
  color: #FFFF;
margin-left: 3px;
padding: 10px 0;
}
h5{
  margin-left: 3px;
  color: #FFFF;

}
}


.Four-images-1{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.Four-images-2{
  display: none;
}

/* .image{
  display: flex;
  flex-direction: column;
  gap: 20px;
} */
.imageAllDIVcombo{
  display: flex;
  flex-direction: column;
  gap: 20px;
padding-top: 8%;
}

@media (min-width: 768px) {
  padding-bottom: 8%;
padding-top: 8%;

  /* .image{
  display: flex;
  flex-direction: row;
  gap: 20px;
} */


.Four-images-1{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.Four-images-2{
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.imageAllDIVcombo{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 60px;
padding-top: 5%;
}
.link-div{
  display: flex;
  padding-top: 2%;
  padding-bottom: 5%;

  gap: 12px;
  margin-left: 40px;
}
.first-h2{
  margin-left: 40px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  gap: 5px;
}
.imgdiv{
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
padding-bottom: 2%;
border-radius: 18%;
p{
margin-left: 20px;
padding: 10px 0;
}
h5{
  margin-left: 20px;
}
}
img{
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 18%;

}
}


@media (min-width: 992px) {
  padding-bottom: 8%;
padding-top: 8%;

.Four-images-1{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.Four-images-2{
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.imageAllDIVcombo{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 80px;
padding-top: 5%;
}
.link-div{
  display: flex;
  padding-top: 2%;
  gap: 12px;
  margin-left: 40px;
}
.first-h2{
  margin-left: 40px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  gap: 5px;
}
.imgdiv{
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
padding-bottom: 2%;
border-radius: 18%;
p{
margin-left: 20px;
padding: 10px 0;
}
h5{
  margin-left: 20px;
}
}
img{
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18%;

}
}
@media (min-width: 1200px) {
  padding-bottom: 7%;
padding-top: 7%;

.Four-images-1{
  display: flex;
  flex-direction: row;
  gap: 50px;
}
.Four-images-2{
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.imageAllDIVcombo{
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 90px;
padding-top: 5%;
}
.link-div{
  display: flex;
  padding-top: 3.3%;
  padding-bottom: 1%;
  gap: 45px;
  margin-left: 90px;
}
.first-h2{
  margin-left: 40px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  gap: 15px;
}
.imgdiv{
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
padding-bottom: 2%;
border-radius: 18%;
p{
margin-left: 3px;
padding: 10px 0;
}
h5{
  margin-left: 3px;
}
}
img{
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 18%;

}
.first-h2{
  margin-left: 90px;
  font-size: 55px;
  font-weight: bold;
  display: flex;
  gap: 5px;
}
.icon-div{
  margin-right: 89px;
  display: flex
}
}

`
function Shop() {
  return (
    <Wrapper>
      <div className='section'>

<h2 className='first-h2'>Our<p className='second-h2'>Shop</p></h2>

<div className=' main-div-routing'>
<div className='link-div'> 
    <a href='#'>On Sale</a>
    <a href='#'>Original Print</a>
    <a href='#'>Print</a>
</div>

<div className='icon-div'>
<img  className ='icon' src="./art/shop-image-5.png" alt=""/>
<img  className ='icon' src="./art/shop-image-5.png" alt=""/>
</div>
</div>



<div className='imageAllDIVcombo'>




<div className='Four-images-1'>
{/* <div className='image'> */}
    <div className='imgdiv'>
    <img src="./art/shop-image-5.png" alt=""/>
    <p>Sun Kissed</p>
    <h5>$90.00</h5>
    </div>


<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Triumph</p>
<h5>$100.00</h5>
</div>
{/* </div> */}

{/* <div className='image'> */}
<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Dark Elephant</p>
<h5>$100.00</h5>
</div>

<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Charlois</p>
<h5>$250.00</h5>
</div>
{/* </div> */}

</div>


{/* the end  */}

<div className='Four-images-2'>
{/* <div className='image'> */}
<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
    <p>Bar Coded horse</p>
    <h5>100.00</h5>
</div>

<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Horizon</p>
<h5>$90.00</h5>
</div>
{/* </div> */}


{/* <div className='image'> */}
<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Charge</p>
<h5>$100.00</h5>
</div>

<div className='imgdiv'>
<img src="./art/shop-image-5.png" alt=""/>
<p>Dark Elephant</p>
<h5>$70.00</h5>
</div>
{/* </div> */}

</div>

</div>

      </div>
    </Wrapper>
  )
}

export default Shop
