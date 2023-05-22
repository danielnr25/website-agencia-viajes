
const TripData = (props) => {
   
   const { image, heading, text } = props

   return (
      <div className="t-card">
         <div className="t-image">
            <img src={image} alt="" />
         </div>
         <h4>{heading}</h4>
         <p>{text}</p>
      </div>
   )
}

export default TripData