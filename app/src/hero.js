import react from 'react'
import Dan from './images/Daniel_Winn.jpg/'

export default function Hero() {
    return(
        <div className="container hero">
            <img src={Dan} alt="image of me!" id="heroImg"/>
            <h1> Hi! I'm Daniel Winn! </h1>
            <h4> I'm a FullStack developer!</h4>
        </div>
    )
}
