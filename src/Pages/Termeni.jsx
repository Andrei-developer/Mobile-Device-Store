import "./Css/ATP.css"


export default function Termeni(props){
    
    return(
        <div className="atp" style={{display: props.open}}>
            <div className="atp-container">
                <h2>
                    Acest document stabilește termenii și condițiile de utilizare a site-ului www.evox.ro
                    și condițiile de cumpărare a produselor comercializate de Evox. Prin accesarea și utilizarea acestui site, ești de acord cu toți termenii menționați mai jos.
                </h2>
                
                <h3>
                    1. Generalități
                </h3>
                
                <p>
                    Site-ul Evox.ro este operat de Evox SRL, având scopul de a oferi spre vânzare produse electronice precum telefoane, tablete, smartwatch-uri și laptopuri.
                    Ne rezervăm dreptul de a modifica în orice moment conținutul site-ului, prețurile produselor, precum și acești termeni, fără notificare prealabilă.
                </p>
                
                <h3>
                    2. Drepturile de proprietate intelectuală
                </h3>
                
                <p>
                    Întreg conținutul site-ului — texte, imagini, logo-uri, grafice, videoclipuri și elemente de design — este proprietatea Evox SRL și este protejat de legislația privind drepturile de autor.
                    Copierea, distribuirea sau folosirea neautorizată a conținutului este strict interzisă.
                </p>
                
                <h3>
                    3. Înregistrarea și confidențialitatea contului
                </h3>
                
                <p>
                    Pentru a efectua o comandă, este necesar să creezi un cont sau să furnizezi date reale de contact. Utilizatorul este responsabil de păstrarea confidențialității datelor de autentificare.
                    Evox nu răspunde pentru utilizarea necorespunzătoare a contului de către terți.
                </p>
                
                <h3>
                    4. Comenzi și livrare
                </h3>
                
                <p>
                    Toate comenzile plasate pe site sunt confirmate prin e-mail sau telefonic.
                    Evox își rezervă dreptul de a refuza comenzi în cazul unor erori evidente de preț, stoc epuizat sau suspiciuni de fraudă.
                    Timpul de livrare variază între 1 și 3 zile lucrătoare, în funcție de destinație.
                </p>
                
                <h3>
                    5. Prețuri și modalități de plată
                </h3>
                
                <p>
                    Toate prețurile sunt exprimate în lei (RON) și includ TVA.
                    Plata se poate face online cu cardul, ramburs sau prin transfer bancar, în funcție de preferința clientului.
                </p>
                
                <h3>
                    6. Garanție și retur
                </h3>
                
                <p>
                    Toate produsele comercializate de Evox beneficiază de garanție conform legislației în vigoare.
                    Clientul are dreptul să returneze produsele în termen de 14 zile calendaristice de la primire, fără a fi necesară justificarea deciziei.
                </p>
                
                <h3>
                    7. Limitarea răspunderii
                </h3>
                
                <p>
                Evox SRL nu poate fi trasă la răspundere pentru eventuale erori de funcționare ale site-ului, întreruperi ale serviciului sau pierderi de date cauzate de factori externi.
                </p>
                
                <h3>
                    8. Legea aplicabilă
                </h3>
                
                <p>
                    Acești termeni și condiții sunt guvernați de legislația română.
                    Orice litigiu va fi soluționat pe cale amiabilă, iar în caz contrar, de instanțele competente din România.
                </p>
            </div>
        </div>
    )
}