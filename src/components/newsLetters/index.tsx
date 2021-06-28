import { useState } from 'react'
import Form from "react-bootstrap/Form"
import BtnInscreverSe from "../botoes/inscreverSe"
import { InputBasic } from "../input"

const NewsLatter = (props: any) => {

    const [inputText, setInput] = useState("")
    const [btnText, setbtn] = useState("Inscrever-se")

    function OnChange(e: any) {
        setInput(e.target.value)
    }

    function Assinar() {
        alert("Assinado " + inputText);
        setInput("")
    }

    return (
        <Form>
            <div className="row d-flex justify-content-center">

                <div className="col-auto">
                    <p className="pt-2">
                        <strong className="text-uppercase text-light">
                            Assine para receber notícias e Promoções
                        </strong>
                    </p>
                </div>
                <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                        <InputBasic
                            onChange={(e) => OnChange(e)}
                            value={inputText}
                            type="text"
                            placeholder="Digite o seu e-mail"
                            label="E-mail" />
                    </div>
                </div>
                <div className="col-auto">
                    <BtnInscreverSe
                        onClick={() => Assinar()}
                        type="button"
                        descricao={btnText}
                    />
                </div>
            </div>
        </Form>
    )
}

export default NewsLatter;
