import './FormBranch.css';
import LinkButton from '../../link_button/LinkButton.js'; 

export default function FormBranch({title, buttons = []}){

    return(
        <>
            <form>
                <label>{title}</label>
                <input type="text" placeholder={"Add the "+title}></input>
                {buttons.map( item =>(
                    <LinkButton enable={item.enable} text={item.text} url={item.url} />
                ))}
            </form>
        </>
    );

}