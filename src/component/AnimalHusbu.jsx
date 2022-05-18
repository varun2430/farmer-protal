import { Link } from "react-router-dom"

const AnimalHusbu = () => {

    const play_audio = (e) => {
        const html_lang = document.querySelector("html").getAttribute("lang")
        let s_audio = new Audio("/en/en_ahc.mp3")
    
        if(html_lang === "hi")
        {
            s_audio = new Audio("/hi/hi_ahc.mp3")
        }

        s_audio.play()
    }

  return (
    <>
    
        <div className="card px-3">
            <div className="card-body">

                <div className="row">

                    <div className="col">
                        <h5 className="card-title"><i className="fa-solid fa-paw"></i>    Animal Husbandry Corner</h5>
                    </div>

                    <div className="col-2">
                        <div className="text-end">
                            <button className="btn btn-outline-success" onClick={(e) => {play_audio(e)}}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>

                </div>


                <ul className="list-group list-group-flush">
                    <Link className="list-group-item" to="/veterinarycentre">1. Veterinary Centre</Link>
                    <Link className="list-group-item" to="/diagnosticlaboratory">2. Diagnostic Laboratory</Link>
                    <Link className="list-group-item" to="/diseaseandsymptoms">3. Disease And Symptoms</Link>
                </ul>

            </div>
        </div>
    
    </>
  )
}

export default AnimalHusbu