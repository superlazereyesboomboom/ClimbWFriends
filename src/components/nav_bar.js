import React, {useState} from 'react'

const NavBar = ({navBarCallback}) =>{
//fontFamily: 'Comic Sans MS, cursive'
const [isHovered, setIsHovered] = useState(false);
const [hoveredValue,setHoveredValue] = useState('')
const handleMouseEnter = (e) => {
  setHoveredValue(e.target.innerText)
  setIsHovered(true);
};

const handleMouseLeave = (e) => {

  setIsHovered(false);
};



const handleClick = (e) =>{
const buttonText = e.target.textContent
switch(buttonText){
  case 'About':
    navBarCallback(buttonText)
    break
  case 'Usage':
    navBarCallback(buttonText)
    break
  case 'Contact':
    navBarCallback(buttonText)
    break
}

}

    const items = ['About','Contact','Usage']
    
return(
    <div style = {{display: 'flex', marginTop: '20px'}}>

        {items.map((item) => 
            <>
            <div  onClick ={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{cursor: 'pointer',fontSize:'20px', fontWeight: 'bold',color: (isHovered && hoveredValue==item)? '#cc5500':'#048c7f', fontFamily: 'Comic Sans MS' }}>
            {item}
            </div>
            <div style = {{marginLeft: '20px'}}> </div>
            </>
        
        )}
        

    </div>
)



}

export default NavBar;