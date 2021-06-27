import Carousel from 'react-bootstrap/Carousel'

const Principal = (props : any  ) => (
    <Carousel>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src="https://www.raiodesentupidora.com.br/images/Capa.jpg"
                alt="First slide"
            />
        </ Carousel.Item>
    </Carousel>
)

export default Principal
