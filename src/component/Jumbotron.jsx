
const Jumbotron = (props) => {
  return (
    <>

        <div style={{color: "white"}}>
            <h2 className="mt-3 mb-0">{props.title}</h2>
            <h5 className="p-3">{props.body}</h5>
        </div>
    
    </>
  )
}

export default Jumbotron