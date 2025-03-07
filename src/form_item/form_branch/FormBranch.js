import './FormBranch.css';
import LinkButton from '../../link_button/LinkButton.js'; 

export default function FormBranch({title, buttons = []}){

    return(
        <div className="Form-main-container">

            <form className="Form-container" method='Post'>

                <label>{title}</label>
                <input type="text" placeholder={"Add the "+title}></input>

                <div className="Buttons-container">
                    {buttons.map( item =>(
                        <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                    ))}
                </div>

            </form>
        </div>
    );

}