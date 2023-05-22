import TripData from '../data/TripData'
import '../styles/Trip.css'
import image1 from '../assets/8.jpg'
import image2 from '../assets/4.jpg'
import image3 from '../assets/6.jpg'



function Trip() {
   return (

      <div className='trip'>
         <h1>Viajes Recientes</h1>
         <p className='trip-text'>Puedes descubrir destinos únicos usando google maps</p>
         <div className='tripcard'>
            <TripData
               image={image1}
               heading='Viaje a Indonesia'
               text='La mejor época para viajar a Indonesia es durante la estación seca, que va de mayo a octubre. Una excepción es si quieres viajar a Papúa junto a Molucas, a donde es preferible viajar de septiembre a marzo.'
            />

            <TripData
               image={image2}
               heading='Viaje a la Malasia'
               text='Malasia es un país fascinante. Un país muy diverso donde el choque cultural y la mezcla de religiones sorprenden a cualquiera. Aquí viven en perfecta armonía hindús, musulmanes y chinos.'
            />

            <TripData
               image={image3}
               heading='Viaje a la Francia'
               text='Conocido es por todos como el país del romanticismo y del amor y la pieza clave es la capital francesa. Para que no te quedes con dudas sobre qué hacer en Francia y qué ciudades visitar, hacemos un recorrido por las ciudades francesas más importantes.'
            />
         </div>
      </div>



   )
}

export default Trip