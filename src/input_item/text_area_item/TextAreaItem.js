import './TextAreaItem.css';
import {actionInput as ActionResult, colorInput as ColorResult} from '../../tools/ValidationInputColorsByUser.js';

export default function TextAreaItem({
    text = 'Name textarea',
    fontSize = '2rem',
    weight = 'bold',
    color = 'default'
}){

    color = color.toLowerCase();
    const colorExists = ColorResult(color);

    if(colorExists){
        return(
            <>
                <label className={"label-"+color+"-by-item label-spacing"} >{text+":"}</label>
                <textarea className={"textarea-"+color+"-by-item textarea-spacing"} placeholder={"Add the "+text} rows="4" cols="50"></textarea>
            </>
        );
    }

    return(
        <>
            <label className={"label-default-by-item label-spacing"} >{text+":"}</label>
            <textarea className={"textarea-default-by-item textarea-spacing"} placeholder={"Add the "+text} rows="4" cols="50"></textarea>
        </>
    );

}


