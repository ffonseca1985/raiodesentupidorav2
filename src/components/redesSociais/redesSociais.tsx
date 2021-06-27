import SvgFacebook from './svg/facebook'
import SvgInstagram from './svg/instagram'
import SvgGoogle from './svg/google'
import SvgWhatsApp from './svg/whatsApp'

const RedesSociais = (props :  any) => (
        <>
            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} href="#!" role="button">
                <SvgFacebook />
            </a>

            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} href="#!" role="button">
                <SvgInstagram />
            </a>

            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} href="#!" role="button">
                <SvgGoogle />
            </a>

            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} href="#!" role="button">
                <SvgWhatsApp />
            </a>
        </>
    );

export default RedesSociais