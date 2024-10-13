import "./Main.css"
import fon from '../Img/fon.jpg'


export const Main = () => {
    return (
        <div className="homePage">
            <img className="fon" src={fon} alt="Fon" />
            <div className="lorem">
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dignissimos repudiandae? Laborum magnam odit iste magni omnis assumenda deserunt, et necessitatibus voluptatibus repudiandae natus fugit nemo ut in nihil officia!</p>
            </div>
        </div>
    )
}