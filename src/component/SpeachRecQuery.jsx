
const SpeachRecQuery = () => {

    const play_audio = (e) => {
        const html_lang = document.querySelector("html").getAttribute("lang")
        let s_audio = new Audio("/en/en_rq.mp3")
    
        if(html_lang === "hi")
        {
            s_audio = new Audio("/hi/hi_rq.mp3")
        }
    
        s_audio.play()
      }

    const voice_to_speach = (e) => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onresult = function(event) {
            document.getElementById("speachtotext").value = event.results[0][0].transcript 
        }

        recognition.start()
    }

    const raise_query = (e) => {
        alert("Query Raised Successfully!!")
        document.getElementById("speachtotext").value = ""
    }

  return (
    <>
    
        <div className="card px-3">
            <div className="card-body">

                <div className="row mb-2">

                    <div className="col">
                        <h5 className="card-title"><i className="fa-solid fa-microphone"></i>   Raise Query</h5>
                    </div>

                    <div className="col-2">
                        <div className="text-end">
                            <button className="btn btn-outline-success" onClick={(e) => {play_audio(e)}}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>

                </div>

                <form>

                    <input id="aadharcardinput" type="text" className="form-control mb-1" placeholder="Enter your AADHAAR card number"></input>

                    <textarea id="speachtotext" className="form-control" placeholder="Enter your query here..."></textarea>

                </form>

                <div className="text-center mt-2">
                    <button className="btn btn-outline-primary m-1" onClick={(e) => {voice_to_speach()}}>Speak</button>
                    <button className="btn btn-outline-primary m-1" onClick={(e) => {raise_query(e)}}>Submit</button>
                </div>
                

            </div>
        </div>
    
    </>
  )
}

export default SpeachRecQuery