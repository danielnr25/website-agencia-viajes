
import DestinationData from '../data/DestinationData'
import '../styles/Destination.css'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/5.jpg'
import image4 from '../assets/8.jpg'


function Destination() {
   return (
      <div className="destination">
         <h1>Destinos Populares</h1>
         <p className='parrafo'>Los recorridos le brindan la oportunidad de ver mucho, dentro de un marco de tiempo.
         </p>

         <DestinationData
            cName="first-des"
            heading='Volcán Taal, Batangas'
            text='Es el segundo volcán más activo de Filipinas con 33 erupciones históricas. Todas estas erupciones se concentran en Volcano Island, una isla cerca del centro del lago Taal. Comience dando un recorrido por los monumentos más importantes, eventualmente realice diferentes recorridos en la ciudad como los monumentos de Brooklyn.'
            image1={image1}
            image2={image2}
         />

         <DestinationData
            cName="first-des-reverse"
            heading='Monte Daguldul, Batangas'
            text='Si estás buscando una caminata que es un poco más:
            desafiante pero bueno para un principiante
            alpinista, echa un vistazo al monte Daguldul en San Juan,
            batangas. Comenzarás tu caminata desde la playa.
            Y pasar por bosque tropical, roca diferente
            formaciones y pequeños arroyos. hay un pequeño
            tienda a mitad de camino donde se puede tomar un
            romper y beber jugo de buko, y aunque el
            cumbre en sí puede no tener la mejor vista, el
            La brisa es fantástica. Una vez que hayas regresado
            abajo, dirígete directamente a la playa para refrescarte,
            merecido baño.'
            image1={image3}
            image2={image4}
         />

      </div>
   )
}

export default Destination