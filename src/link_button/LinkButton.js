//import {Link} from 'gatsby';
import './LinkButton.css';
import {actionInput as ActionResult, colorInput as ColorResult} from '../tools/ValidationInputColorsByUser.js';

function LinkButton({
    enable = false,
    text = 'some link',
    url = 'none', 
    action = 'link',
    showText = true,
    icon = ''
}){
    
    action = action.toLowerCase();
    const textToUpper = text.toUpperCase();
    const actionExists = ActionResult(action);

    if(enable && actionExists ){

        return(
            <>
                <button className={"Linkbutton-"+action+"-container"} >
                    
                    <a className={"Linkbutton-"+action+"-item"} href={url}>
                        <i className={icon} ></i>
                        <span>{textToUpper}</span>
                    </a>
                </button>
            </>
        );
        
    }else if(!enable && actionExists){

        return(
            <>
                <button className={"Linkbutton-"+action+"-container"} disabled>
                    <a className={"Linkbutton-"+action+"-item"} href={url}>
                        <i className={icon} ></i>
                        <span>{textToUpper}</span>
                    </a>
                </button>
            </>
        );

    }

    return(
        <>
            <button className={"Linkbutton-link-container"} disabled>
                <a className={"Linkbutton-"+action+"-item"} href={url}>
                    <i className={icon} ></i>
                    <span>{textToUpper}</span>
                </a>
            </button>
        </>
    );

}

export default LinkButton;