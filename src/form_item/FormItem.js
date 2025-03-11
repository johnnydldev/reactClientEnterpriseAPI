import './FormItem.css';
import '../SharedStylesComponents.css';
import LinkButton from '../link_button/LinkButton.js'; 
import InputItem from '../input_item/InputItem.js';
import TextAreaItem from '../input_item/text_area_item/TextAreaItem.js';
import ButtonGroup from '../buttons_group/ButtonGroup.js';

export default function FormItem({
    title = 'Form Title',
    type = 'default',

    inputs = [
    {
        text: 'Some Input',
        type: 'text',
        color: 'default'
    },
    ],

    textarea = {
        text: 'Comment',
        color: 'default'
    },

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

    if(type.toLowerCase() === 'contact'){

        return(
     
            <div className="form-container glass-morphysm horizontal-align">
                   
                <form className="form-items-container vertical-align" method='Post'>
                    <legend className="form-title glass-morphysm">{title.toUpperCase()}</legend>
    
                    {inputs.map(item =>(
                        <InputItem text={item.text} type={item.type} color={item.color}/>
                    ))}

                    <TextAreaItem text={textarea.text} color={textarea.color}/>
    
                    <ButtonGroup buttons={buttons}/>
    
                </form>
            </div>
        );
    }

    return(
     
        <div className="form-container glass-morphysm horizontal-align">
               
            <form className="form-items-container vertical-align" method='Post'>
                <legend className="form-title glass-morphysm">{title.toUpperCase()}</legend>

                {inputs.map(item =>(
                    <InputItem text={item.text} type={item.type} color={item.color}/>
                ))}

                <ButtonGroup buttons={buttons}/>

            </form>
        </div>
    );

}