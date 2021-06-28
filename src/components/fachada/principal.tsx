import Carousel from 'react-bootstrap/Carousel'

const Principal = (props : any  ) => (
    <Carousel>
        <Carousel.Item interval={3500}>
            <img    
                src="https://www.raiodesentupidora.com.br/images/Capa.jpg"
                alt="First slide"
            />
        </ Carousel.Item>
    </Carousel>
)

export default Principal

