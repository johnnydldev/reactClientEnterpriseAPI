//import {Link} from 'gatsby';
import './LinkButton.css';

function LinkButton({
    enable = false,
    text = 'some link',
    url = 'none', 
    color = 'link'
}){
    
    color = color.toLowerCase();
    const textToUpper = text.toUpperCase();
    const arrayActions = ['link', 'submit', 'edit', 'delete', 'info', 'back'];
    const actionExists = arrayActions.some((item) => item === color);

    if(enable && actionExists ){

        return(
            <>
                <button className={"Linkbutton-"+color+"-container"} >
                    <a className={"Linkbutton-"+color+"-item"} href={url}>{textToUpper}</a>
                </button>
            </>
        );
        
    }else if(!enable && actionExists){

        return(
            <>
                <button className={"Linkbutton-"+color+"-container"} disabled>
                    <a className={"Linkbutton-"+color+"-item"} href={url}>{textToUpper}</a>
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