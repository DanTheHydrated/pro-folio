import react from 'react'
import Dan from './images/Daniel_Winn.jpg/'
import Logo from './images/1664223925.901021-04F686CA-DB5B-4CE5-878D-74F6E7281126.png'

export default function Hero() {
    return(
        <div className="container hero">
            <Image className="social-icon" src = {Dan}
            onMouseOver={e => e.currentTarget.src = Dan}
            onMouseOut={e => e.currentTarget.src = Logo}
            />
            <h1> Hi! I'm Daniel Winn! </h1>
            <h4> I'm a FullStack developer!</h4>
        </div>
    )
}
