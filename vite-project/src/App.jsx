import './App.css'
import TestimonialCard from './components/TestimonialCard.jsx'

function App() {

   const data = [
    {
      name: " Singh Gaur",
      review: "This service was amazing! Highly recommended."
    },
    {
      name: "assaaaammmm",
      review: "This service was okayish, would recommend if in the area."
    },
    {
      name: "keerrrr",
      review: "This service was not a pleasant experience for me"
    },
    {
      name: "keerraaaa",
      review: "This service was the worst thing happened to mankind"
    },

   ]
  return (
    <>
    <div id='WholeGrid'>
      {data.map((item,index)=>(
        <TestimonialCard key= {index}{...item} />
      ))}
    </div>
    </>
  )
}

export default App