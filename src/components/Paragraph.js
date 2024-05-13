import "./styles/paragraph.css";

function Paragraph  ({text, image, alt, title})  {
    return(
        <div className="paragraphDiv">
            <img className="paraImg" src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Paragraph;