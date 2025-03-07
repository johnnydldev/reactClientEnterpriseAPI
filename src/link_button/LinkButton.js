//import {Link} from 'gatsby';
import './LinkButton.css';

function LinkButton({
    enable = false,
    text = 'some link',
    url = 'none', 
    action = 'link'
}){

    const textToUpper = text.toUpperCase();

    if(enable){

            return(
                <>
                    <button className={"Linkbutton-"+action+"-container"} >
                        <a className={"Linkbutton-"+action+"-item"} href={url}>{textToUpper}</a>
                    </button>
                </>
            );
        
    }

    return(
        <>
            <button className={"Linkbutton-"+action+"-container"} disabled>
                <a className={"Linkbutton-"+action+"-item"} href={url}>{textToUpper}</a>
            </button>
        </>
    );

}

export default LinkButton;