import './style.css'

export default function CategoryTitle(props){
 return(
 <>
  
  <a name={props.title}></a>
  <div className="headingbb wrapper">
    <span className="headingname">{props.title}</span>
    
  </div>
 </>
 )
}