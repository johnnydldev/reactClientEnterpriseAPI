import animal from '../images/not-found/animal.png';
import four from '../images/not-found/four.png';
import zero from '../images/not-found/zero.png';
import './NotFound.css';

function NotFound(){
    return(
        <div className="Not-found">
            <div className="Notfound-image-container">
                <img src={four} className="Image-four-number" alt="four number image."/>
                <img src={zero} className="Image-zero-number" alt="zero number image."/>
                <img src={four} className="Image-four-number" alt="four number image."/>
            </div>
            <img src={animal} className="Image-animal" alt="animal pic abduced by ovni."/>
        </div>
    );
}

export default NotFound;

