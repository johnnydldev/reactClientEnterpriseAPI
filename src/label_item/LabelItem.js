import './LabelItem.css';
import {actionInput as ActionResult, colorInput as ColorResult} from '../tools/ValidationInputColorsByUser.js';

export default function LabelItem({
    title = 'Title',
    text = 'Some text',
    color = 'default'
}){

    color = color.toLowerCase();
    const colorExists = ColorResult(color);

    if(colorExists){
        return(
            <>
                <label className={"label-"+color+"-item"}>
                    <span className={"label-"+color+"-title"}>{title}: </span>
                    {text}
                </label>
            </>
        );
    }

    return(
        <>
            <label className={"label-default-item"}>
                <span className={"label-default-title"}>{title}: </span>
                {text}
            </label>
        </>
    );

}