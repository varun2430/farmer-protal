import React from 'react'

const Weather = () => {

    
    const play_audio = (e) => {
        const html_lang = document.querySelector("html").getAttribute("lang")
        let s_audio = new Audio("/en/en_w.mp3")
    
        if(html_lang === "hi")
        {
            s_audio = new Audio("/hi/hi_w.mp3")
        }

        s_audio.play()
    }

  return (
    <>

        <div className="card px-3">
            <div className="card-body">

                <div className="row">

                    <div className="col">
                        <h5 className="card-title"><i className="fa-solid fa-cloud-sun"></i>    Weather</h5>
                    </div>

                    <div className="col-2">
                        <div className="text-end">
                            <button className="btn btn-outline-success" onClick={(e) => {play_audio(e)}}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>

                </div>


                <ul className="list-group list-group-flush">
                    <a className="list-group-item" href="https://farmer.gov.in/WeatherReport/weatherreport.aspx" target="_blank" rel="noreferrer">1. Weather Details</a>
                    <a className="list-group-item" href="https://farmer.gov.in/WeatherReport/NowCast.aspx" target="_blank" rel="noreferrer">2. Extreme Weather Alert</a>
                </ul>

            </div>
        </div>

    </>
  )
}

export default Weather