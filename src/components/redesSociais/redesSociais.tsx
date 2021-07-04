import SvgFacebook from './svg/facebook'
import SvgInstagram from './svg/instagram'
import SvgGoogle from './svg/google'
import SvgWhatsApp from './svg/whatsApp'

const RedesSociais = (props :  any) => (
        <>
            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} 
               href="https://www.facebook.com/raiodesentupidoradedetizadora/" 
               target="_blank"
               rel="noreferrer"
               role="button">
                <SvgFacebook />
            </a>

            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} 
               href="https://www.instagram.com/raiodesentupidora" 
               target="_blank"
               rel="noreferrer"
               role="button">
                <SvgInstagram />
            </a>

            <a className={`btn ${props.ClassName == undefined ? "btn-outline-light": props.ClassName} btn-floating m-1`} 
               href="https://api.whatsapp.com/send?phone=5511980639525"
               target="_blank"
               rel="noreferrer"
               role="button">
                <SvgWhatsApp />
            </a>
        </>
    );

export default RedesSociais