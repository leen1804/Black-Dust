







import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'




const Wrapper = styled.section`
/* z-index: 5; */
position: absolute;
top:0;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;


.active-link {
    color: red;
    text-decoration: line-through;
  }


  .home{
  color: #55BDD6;
  text-decoration: line-through;
}
.header{
    z-index: 3;
    background:#69737D;
    opacity: 0.5;
   height: 70px;
   position: absolute;
   top: 0px;
   display:flex;
flex-direction:row-reverse;
justify-content: space-between;
align-items: center;
width: 100%;   
}

.btn-div{
  display: flex;
margin-right: 20px;
  button{
    width: 100px;
    height: 40px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid white;
  }
  justify-content: flex-end;
  align-items: flex-end;
}





ul{
   gap : 40px;
    z-index: 4;
    position: absolute;
   left : 0;
top: 0;  
width: 100%;
height: 100vh;
background: #4A5AF8;
max-height:0vh;
overflow: hidden;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
transition:all 0.7s ease-in-out;


}
ul li {
position: relative;
    display: block;
    color:#363636;
    font-weight:bolder ;
    padding: 10px;
    width: max-content;
color :black;
&:hover{
  color: #55BDD6;
  text-decoration: line-through;
}
} 


 a {
    text-decoration: none;
    color: #363636;
    font-size: 20px;
    font-weight: bolder;
    width: max-content;
}
.hamburger{
  position: absolute;

  left: 20px;
    padding:20px 37px 20px 6px;
      /* margin-right:0px; */
      /* transition:all 0.7s ease; */
      z-index:9;

}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 40px;
    height: 3px;
    background:#000;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
    background:#000;
    position: absolute;
    top: -9px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
    background:#000;
    position: absolute;
    top: 9px;
    transition: all .6s ease-in-out;
    content: "";
    }
}


.open{
    transition:all 300ms ease;
    span{
        background:transparent;
        &:before{
       transform: rotate(496deg);
   top: 0;
    }
    &:after{
        transform: rotate(-496deg);
        top: 0;
    }
    }
}
.change{
    top: 0;
max-height:95vh;

}



@media (min-width: 568px) {
  ul li {
position: relative;
    display: block;
    color:#363636;
    font-weight:bolder ;
    padding: 10px;
    width: max-content;
    /* transition: all .4s ease-in-out;  */
   
} 
}

@media (min-width: 768px) {


  .hamburger{
  left: 50px;
    padding:20px 37px 20px 6px;
      position: absolute;

      z-index:9;

}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 50px;
    height: 4px;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
    .header{
        height: 70px;
    }
    ul{
        height: 90vh;
        transition:all 0.7s ease-in-out;
        li{
            font-size: 28px;
            color :#363636;

        }
        a{}
    }
    .home{
  color: #55BDD6;
  text-decoration: line-through;
}
   img {
    width: 15%;
}

.btn-div{
  display: flex;
margin-right: 40px;
  button{
    width: 100px;
    height: 40px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid white;
  }
  justify-content: flex-end;
  align-items: flex-end;
}
}
@media (min-width: 992px) {


  .hamburger{
  left: 50px;
    padding:20px 37px 20px 6px;
    position: absolute;

      z-index:9;

}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 50px;
    height: 4px;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
    .header{
        height: 70px;
    }
    ul{
        height: 90vh;
        transition:all 0.7s ease-in-out;
        gap : 20px;

        li{
            font-size: 28px;
            color :#363636;

        }
        a{}
    }
    .home{
  color: #55BDD6;
  text-decoration: line-through;
}
   img {
    width: 15%;
}
.change{
    top: 0;
max-height:48vh;

}

}
@media (min-width: 1200px) {


  .hamburger{
  left: 100px;
    padding:20px 37px 20px 6px;
    position: absolute;

      z-index:9;

}

span{
    border-radius:18px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 40px;
    height: 5px;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: -12px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
    position: absolute;
    top: 12px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
    .header{
        height: 100px;
    }
    ul{
        height: 90vh;
        transition:all 0.7s ease-in-out;
        gap : 20px;

        li{
            font-size: 28px;
            color :#363636;

        }
        a{}
    }
    .home{
  color: #55BDD6;
  text-decoration: line-through;
}
   img {
    width: 15%;
}
.change{
    top: 0;
max-height:170vh;

}

.btn-div{
  display: flex;
margin-right: 110px;
  button{
    padding-left: 15px;
    padding-right: 65px;
    padding-top: 20px;
    padding-bottom: 40px;
    width: max-content;
    height: 0px;
    border-radius: 18px;
    font-size: 18px;
    background: transparent;
    border: 1px solid white;
  }
  justify-content: flex-end;
  align-items: flex-end;
}

}



`


// li {

//   display: block;
//   color:black;
//   font-weight:bolder ;
//   padding: 10px;
//   width: max-content;
//   transition:  none;
//   &:hover{
//     text-decoration: line-through;
//     color: #55BDD6;
//   }
//   } 
//   }
  
//   .home{
//     color: #55BDD6;
//     text-decoration: line-through;
//   }



function Kuda() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Wrapper>
      <div className='header'>
        
      <div className='btn-div'>
        <button>Contact Us</button>
        </div>
        <div className={click ? 'hamburger open' : 'hamburger'} onClick={handleClick}>
          <span></span>
        </div>
       

        <ul className={click ? 'change' : ''}>
          <li>
            <a  className ='home' href='#'>Home</a>
          </li>

          <li>
            <NavLink exact to="/about me" activeClassName="active-link">About Me</NavLink>
          </li>
          <li>
            <NavLink exact to="/ 0ur portfolio" activeClassName="active-link">OurPortfolio</NavLink>
          </li>
          <li>
            <NavLink exact to="/blog" activeClassName="active-link">Blog</NavLink>
          </li>
          <li>
            <NavLink  exact to="/our shop" activeClassName="active-link">Our Shop</NavLink>
          </li>
          <li>
            <NavLink exact to="/news letter" activeClassName="active-link">News Letter</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact us" activeClassName="Contact Us">Opportunities</NavLink>
          </li>
      
        </ul>

        
      </div>
    </Wrapper>
  );
}

export default Kuda;




