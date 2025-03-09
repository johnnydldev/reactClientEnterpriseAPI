import './FormBranch.css';
import '../../SharedStylesComponents.css';
import LinkButton from '../../link_button/LinkButton.js'; 
import InputItem from '../../input_item/InputItem.js';

export default function FormBranch({
    inputs = [
    {
        text: 'Branch Name',
        type: 'text',
        color: 'default'
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
        <div className="form-container glass-morphysm horizontal-align">

            <form className="form-items-container vertical-align" method='Post'>

                {inputs.map(item =>(
                    <InputItem text={item.text} type={item.type} color={item.color}/>
                ))}

                <div className="buttons-container horizontal-align">
                    {buttons.map( item =>(
                        <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                    ))}
                </div>

            </form>
        </div>
    );

}