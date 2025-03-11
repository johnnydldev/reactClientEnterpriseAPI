import './ButtonGroup.css';
import '../SharedStylesComponents.css';
import LinkButton from '../link_button/LinkButton.js';
import {alignInput as AlignResult} from '../tools/ValidationInputColorsByUser.js';



export default function ButtonGroup({
    alignType = 'horizontal',
    
    buttons = [
        {
            enable: true,
            text: 'Edit',
            url: './notFound',
            action: 'edit'
          },
          {
            enable: false,
            text: 'Delete',
            url: './notFound',
            action: 'delete'
        }
    ]
}){

    const alignExists = AlignResult(alignType.toLowerCase());

    if(alignExists){
        return(
            <div className={"buttons-container "+alignType+"-align"}>
                    {buttons.map((item) => (
                        <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                    ))}
            </div>
        );
    }

    return(
        <div className="buttons-container horizontal-align">
                {buttons.map((item) => (
                    <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                ))}
        </div>
    );

}
