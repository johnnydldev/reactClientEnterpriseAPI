import './FormEmployee.css';
import LinkButton from '../../link_button/LinkButton.js'; 
import InputItem from '../../input_item/InputItem.js';

export default function FormEmployee({
    inputs =[{
        text: 'Employee name',
        type: 'text'
    },
    {
        text: 'Employee age',
        type: 'text'
    },
    {
        text: 'Employee genre',
        type: 'text'
    },
    {
        text: 'Employee work description',
        type: 'text'
    }],

    buttons = [{
        enable: false,
        text: 'Submit',
        url: './notfound',
        action: 'submit'
    },
    {
        enable: false,
        text: 'Back Home',
        url: './notfound',
        action: 'back'
    }]
}){

    return(
        <div className="Form-main-container">
            <form className="Form-container" >

                {inputs.map(item => (
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