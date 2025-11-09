import "./Css/Contact.css"

export default function Contact(props){
    
    return(
        <div className="contact" style={{display: props.open}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22774.00537223532!2d26.066944!3d44.4792832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202381d23cfaf%3A0x80ccadadef58f6a0!2sRomexpo!5e0!3m2!1sro!2sro!4v1762037327105!5m2!1sro!2sro" loading="lazy"></iframe>
            <div className="contact-container">
                <p>Telefon: 0723-456-789</p>
                <p>Email: 3FtE2@examplu.com</p>
                <p>Locatie: str. Romexpo, nr. 3</p>
                <p>Orar: Luni-Vineri: 9:00 - 18:00</p>
            </div>
        </div>
    )
}