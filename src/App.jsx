import './App.css'
import { products } from "../public/assets/data/db.json"
export default function App(){
  return (
    <>
    <h1 style={{textAlign:"center",color:"red", fontSize:"50px"}}>Mobile Device Store</h1>
    {products.map((p) => {
        return(
          <div key={p.id} id={p.id}>
            <hr />
              <p>{p.id}</p>
              <p>{p.name}</p>
              <p>{p.oldPrice}</p>
              <p>{p.newPrice}</p>
              <p>{p.categoryBrand}</p>
              <p>{p.categoryModel}</p>
              <p>{p.category}</p>
              <img loading='lazy' style={{width:"800px"}} src={p.image1} alt="" />
              <img loading='lazy' style={{width:"800px"}} src={p.image2} alt="" />
              <img loading='lazy' style={{width:"800px"}} src={p.image3} alt="" />
              <img loading='lazy' style={{width:"800px"}} src={p.image4} alt="" />
              <img loading='lazy' style={{width:"800px"}} src={p.image5} alt="" />
              <p>{p.description}</p>
              <p>{p.smallDescription}</p>
              <p>{p.brand}</p>
              <p>{p.model}</p>
              <p>{p.color}</p>
              <p>{p.tipSIM}</p>
              <p>{p.memoriaRAM}</p>
              <p>{p.memory}</p>
              <p>{p.suportMicroSD}</p>
              <p>{p.modelProcesor}</p>
              <p>{p.sistemDeOperare}</p>
              <p>{p.display}</p>
              <p>{p.rezolutie}</p>
              <p>{p.porturi}</p>
              <p>{p.bluetooth}</p>
              <p>{p.wifi}</p>
              <p>{p.nfc}</p>
              <p>{p.baterie}</p>
              <p>{p.camerSpate}</p>
              <p>{p.cameraFrontala}</p>
              <p>{p.dimensiuni}</p>
              <p>{p.altele}</p>
          </div>
        )
    })}
    </>
  )
}
