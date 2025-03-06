//import {Link} from 'gatsby';
import './LinkButton.css';

function LinkButton({
    enable = false,
    text = 'some link',
    url = 'none'
}){

    if(enable){
        return(
            <>
                <button className="Linkbutton-container" >
                    <a className="Linkbutton-item" href={url}>{text}</a>
                </button>
            </>
        );
    }

    return(
        <>
            <button className="Linkbutton-container" disabled>
                <a className="Linkbutton-item" href={url}>{text}</a>
            </button>
        </>
    );

}

export default LinkButton;