import react from 'react'
import Dan from './images/Daniel_Winn.jpg/'

export default function Hero() {
    return(
        <div className="container hero">
            <img src={Dan} alt="image of me!" />
        </div>
    )
}
