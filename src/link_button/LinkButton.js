//import {Link} from 'gatsby';
import './LinkButton.css';

function LinkButton({
    enable = false,
    text = 'some link',
    url = 'none', 
    action = 'link'
}){
    
    action = action.toLowerCase();
    const textToUpper = text.toUpperCase();
    const arrayActions = ['link', 'submit', 'edit', 'delete', 'info', 'back'];
    const actionExists = arrayActions.some((item) => item === action);

    if(enable && actionExists ){

        return(
            <>
                <button className={"Linkbutton-"+action+"-container"} >
                    <a className={"Linkbutton-"+action+"-item"} href={url}>{textToUpper}</a>
                </button>
            </>
        );
        
    }else if(!enable && actionExists){

        return(
            <>
                <button className={"Linkbutton-"+action+"-container"} disabled>
                    <a className={"Linkbutton-"+action+"-item"} href={url}>{textToUpper}</a>
                </button>
            </>
        );

    }

    return(
        <>
            <button className={"Linkbutton-link-container"} disabled>
                <a className={"Linkbutton-link-item"} href={url}>{textToUpper}</a>
            </button>
        </>
    );

}

export default LinkButton;