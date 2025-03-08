import './FormBranch.css';
import LinkButton from '../../link_button/LinkButton.js'; 
import InputItem from '../../input_item/InputItem.js';

export default function FormBranch({
    inputs = [
    {
        text: 'Branch Name',
        type: 'text'
    },
    ],
    buttons = [
    {
        enable: false,
        text: 'Submit',
        url: './NotFound',
        action: 'submit'
    },
    {
        enable: true,
        text: 'Back home',
        url: './NotFound',
        action: 'back'
    }    
    ]
}){

    return(
        <div className="Form-main-container">

            <form className="Form-container" method='Post'>

                {inputs.map(item =>(
                    <InputItem text={item.text} type={item.type} />
                ))}

                <div className="Buttons-container">
                    {buttons.map( item =>(
                        <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                    ))}
                </div>

            </form>
        </div>
    );

}