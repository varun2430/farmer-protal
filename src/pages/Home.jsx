import AgriAndHorti from "../component/AgriAndHorti"
import AnimalHusbu from "../component/AnimalHusbu"
import MapView from "../component/MapView"
import SpeachRecQuery from "../component/SpeachRecQuery"
import Weather from "../component/Weather"

const Home = () => {
  return (
    <>
    
        <div className="container-fluid">

            <div className="row m-4">
            <SpeachRecQuery />
            </div>

            <div className="row m-4">
            <AgriAndHorti />
            </div>

            <div className="row m-4">
            <AnimalHusbu />
            </div>

            <div className="row m-4">
            <MapView />
            </div>

            <div className="row m-4">
            <Weather />
            </div>

        </div>
    
    </>
  )
}

export default Home