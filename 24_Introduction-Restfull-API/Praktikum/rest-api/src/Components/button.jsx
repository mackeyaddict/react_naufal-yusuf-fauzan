import { } from "react-bootstrap";

export default function Button({children, variant="primary"}) {
  const variants = 
    {
      primary: 'btn-primary text-white',
      secondary: 'text-white'
    }
  
  return(
    <button className={`btn rounded-pill py-2 px-4 font-bold ${variants[variant]}`}>{children}</button>
  )
}