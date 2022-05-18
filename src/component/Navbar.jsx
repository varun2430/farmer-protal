import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">

                {/* <a className="navbar-brand" href="/" >Farmer Portal</a> */}

                <h1>
                  <Link className="navbar-brand" to="/">Farmer Portal</Link>
                </h1>

                <div className="float-end">
                  <div id="google_translate_element"></div>
                </div>

            </div>
        </nav>

    </>
  )
}

export default Navbar