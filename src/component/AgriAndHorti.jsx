import { Link } from "react-router-dom"

const AgriAndHorti = () => {
  
  const play_audio = (e) => {
    const html_lang = document.querySelector("html").getAttribute("lang")
    let s_audio = new Audio("/en/en_a&hc.mp3")

    if(html_lang === "hi")
    {
        s_audio = new Audio("/hi/hi_a&hc.mp3")
    }

    s_audio.play()
  }

  return (
    <>

          <div className="card px-3">
            <div className="card-body">

                <div className="row">

                    <div className="col">
                        <h5 className="card-title"><i className="fa-solid fa-tractor"></i>    Agriculture & Horticulture Corner</h5>
                    </div>

                    <div className="col-2">
                        <div className="text-end">
                            <button className="btn btn-outline-success" onClick={(e) => {play_audio(e)}}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>

                </div>


                <ul className="list-group list-group-flush">
                  <Link className="list-group-item" to="/seedDealers">1. Seed Dealers</Link>
                  <Link className="list-group-item" to="/fertiliserDealers">2. Fertilizer Dealers</Link>
                  <Link className="list-group-item" to="/pesticideDealers">3. Pesticide Dealers</Link>
                  <Link className="list-group-item" to="/mspCurrent">4. MSP Current</Link>
                </ul>

            </div>
        </div>
    
    </>
  )
}

export default AgriAndHorti