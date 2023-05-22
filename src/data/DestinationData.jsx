const DestinationData = (props) => {
   
   const {heading, text, image1, image2, cName } = props

   return (
      <div className={cName}>
         <div className="des-text">
            <h2>{heading}</h2>
            <p>
               {text}
            </p>
         </div>
         <div className="image">
            <img src={image1} alt="img" />
            <img src={image2} alt="img" />
         </div>
      </div>
   )
}

export default DestinationData