import "./Css/Intrebari.css"

export default function Intrebari(props){
    
    return(
        <div className="intrebari" style={{display: props.open}}>
            <h1>Pune o intrebare</h1>
            <form action="https://formsubmit.co/apomineata@gmail.com" method="POST">
                    <input type="text" placeholder="Nume" name="name"
                        required
                        id="nume"/>
                    <input type="email" placeholder="Email" name="email"
                        required
                        id="email"/>
                    <textarea name="message" placeholder="Message"
                        id="message"></textarea>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next"
                        value="https://andrew-code.com/multumim.html"/>
                    <button type="submit" id="SubmitBtn">Trimite</button>
            </form>
        </div>
    )
}