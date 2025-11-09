import "./Css/ATP.css"

export default function About(props){
    
    return(
        <div className="atp" style={{display: props.open}}>
            <div className="atp-container">
                <h2>Despre noi</h2>
                <p>
                    Bine ai venit la Evox, locul unde tehnologia se îmbină perfect cu inovația și încrederea.
                    Misiunea noastră este simplă: să aducem cele mai noi și performante produse tehnologice mai aproape de tine, oferindu-ți o experiență de cumpărături online modernă, sigură și rapidă.
                </p>
                <p>
                    Suntem o echipă pasionată de tot ceea ce înseamnă tehnologie – de la telefoane și tablete, până la smartwatch-uri și laptopuri de ultimă generație. Credem că fiecare dispozitiv are puterea de a face viața mai ușoară, mai conectată și mai eficientă.
                </p>
                <p>
                La Evox, selectăm cu grijă fiecare produs pe care îl adăugăm în magazinul nostru. Ne ghidăm după calitate, performanță și fiabilitate, lucrând doar cu branduri de top și furnizori de încredere.
                    Fie că ești în căutarea unui smartphone care să te reprezinte, a unui smartwatch care să-ți monitorizeze activitatea zilnică sau a unui laptop puternic pentru muncă și creativitate — la Evox vei găsi exact ceea ce ai nevoie.
                </p>
                <p>
                    Ne dorim să fim mai mult decât un simplu magazin online. Vrem să fim partenerul tău în evoluție — un loc unde tehnologia devine accesibilă, sigură și personalizată pentru tine.
                    De aceea, oferim asistență dedicată, livrare rapidă, garanție completă și o experiență de cumpărături care te face să revii cu încredere.
                </p>
                <p>
                    Pentru noi, „Evox” nu este doar un nume. Este o promisiune — evoluție prin tehnologie.
                </p>
            </div>
        </div>
    )
} 