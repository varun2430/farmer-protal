
const MapView = () => {

    const play_audio = (e) => {
        const html_lang = document.querySelector("html").getAttribute("lang")
        let s_audio = new Audio("/en/en_mv.mp3")
    
        if(html_lang === "hi")
        {
            s_audio = new Audio("/hi/hi_mv.mp3")
        }

        s_audio.play()
    }

  return (
      <>
      
        <div className="card px-3">
            <div className="card-body">

                <div className="row">

                    <div className="col">
                        <h5 className="card-title"><i className="fa-solid fa-map-location-dot"></i>    Map View</h5>
                    </div>

                    <div className="col-2">
                        <div className="text-end">
                            <button className="btn btn-outline-success" onClick={(e) => {play_audio(e)}}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>

                </div>


                <ul className="list-group list-group-flush">
                    <a className="list-group-item" href="https://farmer.gov.in/Irrigation.aspx" target="_blank" rel="noreferrer">1. Irrigated-Unirrigated Area(State Wise Area)</a>
                    <a className="list-group-item" href="https://farmer.gov.in/agriland.aspx" target="_blank" rel="noreferrer">2. Agricultural Land</a>
                </ul>

            </div>
        </div>
      
      </>
  )
}

export default MapView