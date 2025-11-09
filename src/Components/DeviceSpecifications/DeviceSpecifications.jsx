import "./DeviceSpecifications.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";

export default function DeviceSpecifications() {
    const { id } = useParams();
    const { products, showAllSpecs, setShowAllSpecs } = useContext(ShopContext);
    const product = products.find((p) => p.id === id);

    // Dacă produsul nu există sau nu are câmpul esențial modelName, returnăm null
    if (!product || !product.modelName) {
        return null;
    }

    // Lista cu câmpurile principale
    const mainFields = [
        { label: "Model Name", key: "modelName" },
        { label: "Name", key: "name" },
        { label: "Brand", key: "brand" },
        { label: "Model", key: "model" },
        { label: "Color", key: "color" },
        { label: "Tip SIM", key: "tipSIM" },
    ];

    // Lista cu câmpurile detaliate (afișate doar dacă showAllSpecs = true)
    const detailedFields = [
        { label: "Memoria RAM", key: "memoriaRAM" },
        { label: "Memory", key: "memory" },
        { label: "Suport Micro SD", key: "suportMicroSD" },
        { label: "Model Procesor", key: "modelProcesor" },
        { label: "Sistem De Operare", key: "sistemDeOperare" },
        { label: "Display", key: "display" },
        { label: "Rezolutie", key: "rezolutie" },
        { label: "Porturi", key: "porturi" },
        { label: "Bluetooth", key: "bluetooth" },
        { label: "Wifi", key: "wifi" },
        { label: "NFC", key: "nfc" },
        { label: "Baterie", key: "baterie" },
        { label: "Camera Spate", key: "camerSpate" },
        { label: "Camera Frontala", key: "cameraFrontala" },
        { label: "Dimensiuni", key: "dimensiuni" },
        { label: "Altele", key: "altele" },
        { label: "Line-up", key: "Line-up" },
        { label: "Data Lansare", key: "data-lansare" },
        { label: "Producator Procesor", key: "producator-procesor" },
        { label: "Frecventa Procesor", key: "frecventaProcesor" },
        { label: "Numar Nuclee", key: "numarNuclee" },
        { label: "Tehnologie Procesor", key: "tehnologieProcesor" },
        { label: "Tip Stocare", key: "tipStocare" },
        { label: "Tip Placa Video", key: "tipPlacaVideo" },
        { label: "Model Placa Video", key: "modelPlacaVideo" },
        { label: "Unitate Optica", key: "unitateOptica" },
        { label: "Camera Web", key: "cameraWeb" },
        { label: "Audio", key: "audio" },
        { label: "Cititor Carduri", key: "cititorCarduri" },
        { label: "Touch Bar", key: "touchBar" },
        { label: "Tastatura Numerica", key: "tastaturaNumerica" },
        { label: "Rata Refresh", key: "rataRefresh" },
        { label: "Greutate", key: "greutate" },
        { label: "Luminozitate", key: "luminozitate" },
        { label: "Limba Tastatura", key: "limbaTastatura" },
        { label: "Securitate", key: "securitate" },
        { label: "Material", key: "material" },
        { label: "Culoare", key: "culoare" },
        { label: "Tip Laptop", key: "tipLaptop" },
        { label: "Accesorii Incluse", key: "accesoriiIncluse" },
        { label: "Brand (Mare)", key: "Brand" },
        { label: "Seria", key: "Seria" },
        { label: "Conectivitate", key: "Conectivitate" },
        { label: "Anul Lansarii", key: "Anul lansării" },
        { label: "Dimensiunea Carcasei", key: "Dimensiunea carcasei" },
        { label: "Material Carcasa", key: "Material carcasa" },
        { label: "Culoare Carcasa", key: "Culoare carcasa" },
        { label: "Tehnologie Ecran", key: "Tehnologie Ecran" },
        { label: "Material Bratara Compatibila", key: "Material bratara (compatibila)" },
        { label: "Culoare Bratara Compatibila", key: "Culoare bratara (compatibila)" },
        { label: "Sistem De Operare (Ceas)", key: "Sistem de Operare" },
        { label: "Brand Compatibil", key: "Brand compatibil" },
        { label: "Sistem De Operare Compatibil", key: "Sistem de operare compatibil" },
        { label: "Model Compatibil", key: "Model compatibil" },
        { label: "WiFi (Ceas)", key: "WiFi" },
        { label: "Bluetooth (Ceas)", key: "Bluetooth" },
        { label: "SIM", key: "SIM" },
        { label: "Tip SIM (Ceas)", key: "Tip SIM" },
        { label: "NFC (Ceas)", key: "NFC" },
        { label: "Radio", key: "Radio" },
        { label: "Chipset", key: "Chipset" },
        { label: "Model Procesor (Ceas)", key: "Model Procesor" },
        { label: "GPU", key: "GPU" },
        { label: "Storage", key: "Storage" },
        { label: "Memorie RAM (Ceas)", key: "Memorie RAM" },
        { label: "SD Card Slot", key: "SD Card Slot" },
        { label: "Speakers", key: "Speakers" },
        { label: "3.5mm Jack", key: "3.5mm jack" },
        { label: "Senzori", key: "Senzori" },
        { label: "Tip Incarcare", key: "Tip incarcare" },
    ];

    return (
        <div className="device-specifications">
            <h2>Specificatii tehnice ale produsului</h2>
            <ul>
                {mainFields.map(f => 
                    product[f.key] && (
                        <li key={f.key}>
                            <p>{f.label}</p>
                            <p>{product[f.key]}</p>
                        </li>
                    )
                )}
                
                {showAllSpecs && detailedFields.map(f =>
                    product[f.key] && (
                        <li key={f.key}>
                            <p>{f.label}</p>
                            <p>{product[f.key]}</p>
                        </li>
                    )
                )}
            </ul>
            <button onClick={() => setShowAllSpecs(!showAllSpecs)}>
                {showAllSpecs ? "Ascunde detalii" : "Vezi detalii"}
            </button>
        </div>
    );
}