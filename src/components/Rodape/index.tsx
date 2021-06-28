
import { Component } from 'react'
import RedesSociais from '../redesSociais/redesSociais'
import Titulo2 from '../tituto/Titulo2'
import NewsLatter from '../newsLetters'

export default class Rodape extends Component {

    render() {
        return (
            <footer className="footer bg-primary" style={styleFooter}>
                <div className="container p-4">
                    <section className="mb-4">
                        <RedesSociais />
                    </section>

                    <section>
                        <NewsLatter />
                    </section>
                    <section className="mb-4">
                        <Titulo2 ClassName="text-uppercase text-light font-weight-bold"  texto="Sobre Nós" />
                        <p className="font-weight-bold">Raio Desentupidora - Somos movido pelo desafio de promover a cada dia serviços de qualidade e eficiência, fazendo a diferença, respeitando o consumidor, garantindo por escrito serviços de qualidade a sociedade com competência , ética, cordialidade e respeito à diversidade.</p>
                    </section>

                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-light font-weight-bold">Institucional</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">HOME</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">QUEM SOMOS</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">NOSSOS SERVIÇOS</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">ARTIGOS</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">CONTATOS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-light font-weight-bold">Contato(s)</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Tel: (11) 98063-9525</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Tel: (11) 98039-9879</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-light font-weight-bold">Formas de Pagamento</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Cartões</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Cheque</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Dinheiro</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">PIX</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Parcelamos também!</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-light font-weight-bold">E-mail</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">contato@raiodesentupidora.com.br</a>
                                    </li>
                                    
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                        <h5 className="text-uppercase text-light font-weight-bold">Endereço</h5>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Rua Nobel Almeida Kuke, 485, Guarulhos - São Paulo CEP: 07084-210</a>
                                        </li>
                                    </ul>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright:
                </div>
            </footer>
        )
    }
}

const styleFooter = {
    marginTop: "1%"

}