import ganeshImg from "./ganesh.jpg"

const homeStyle = {
    backgroundColor: "aqua",
    padding :"10px"
}

const imgStyle = {
    height: "600px",
    marginLeft:"530px"
 
}

const heading = {
    textAlign:"center",
    fontSize:"40px"
}

export default function Home() {
    return(
        <div style={homeStyle}>
            <h1 style={heading}>Welcome to Homepage</h1>
            <img src={ganeshImg} style={imgStyle}/>
            
        </div>
    )

}