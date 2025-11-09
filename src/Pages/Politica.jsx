import "./Css/ATP.css"


export default function Politica(props){
    
    return(
        <div className="atp" style={{display: props.open}}>
            <div className="atp-container">
                <h2>
                    Protejarea datelor tale personale este o prioritate pentru noi. În această politică explicăm ce tipuri de informații colectăm, cum le folosim și cum asigurăm protecția lor.
                </h2>
                
                <h3>
                    1. Colectarea datelor
                </h3>
                
                <p>
                    Colectăm date personale doar atunci când sunt necesare pentru procesarea comenzilor sau pentru îmbunătățirea experienței tale pe site. <br />
                    Aceste date pot fi:<br />
                    nume și prenume;<br />
                    adresa de e-mail;<br />
                    număr de telefon;<br />
                    adresă de livrare/facturare;<br />
                    informații despre dispozitiv (IP, browser, cookies).
                </p>
                
                <h3>
                    2. Scopul colectării
                </h3>

                <p>
                    Datele tale sunt utilizate exclusiv pentru:<br />
                    procesarea comenzilor și livrărilor;<br />
                    comunicarea legată de statusul comenzilor;<br />
                    oferirea de suport tehnic și servicii post-vânzare;<br />
                    trimiterea de oferte și noutăți, doar dacă îți dai acordul explicit.
                </p>
                
                <h3>
                    3. Protecția datelor
                </h3>
                
                <p>
                    Evox implementează măsuri tehnice și organizaționale pentru a asigura securitatea datelor, prevenind pierderea, modificarea sau accesul neautorizat la acestea.
                    Folosim criptarea SSL pentru toate tranzacțiile efectuate pe site.
                </p>
                
                <h3>
                    4. Partajarea informațiilor
                </h3>
                
                <p>
                    Nu vindem și nu cedăm datele tale către terți în scopuri comerciale.<br />
                    Partajarea datelor are loc doar către:<br />
                    firmele de curierat (pentru livrare);<br />
                    procesatorii de plăți (pentru plăți online securizate);<br />
                    autoritățile legale, doar dacă suntem obligați prin lege.
                </p>
                
                <h3>
                    5. Drepturile utilizatorilor
                </h3>
                
                <p>
                    Ai dreptul să:<br />
                    soliciți accesul la datele tale personale;<br />
                    ceri modificarea sau ștergerea acestora;<br />
                    te opui prelucrării datelor în scopuri de marketing;<br />
                    retragi consimțământul în orice moment.<br />
                    Pentru orice solicitare privind datele personale, ne poți contacta la: contact@evox.ro.
                </p>
                
                <h3>
                    6. Durata stocării datelor
                </h3>
                
                <p>
                    Datele sunt păstrate doar cât este necesar pentru scopurile menționate mai sus sau conform cerințelor legale.
                </p>
            </div>
            
        </div>
    )
}