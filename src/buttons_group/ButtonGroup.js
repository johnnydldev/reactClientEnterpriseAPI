import './ButtonGroup.css';
import '../SharedStylesComponents.css';
import LinkButton from '../link_button/LinkButton.js';


export default function ButtonGroup({
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

    return(
        <div className="buttons-container horizontal-align">
                {buttons.map((item) => (
                    <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                ))}
        </div>
    );

}
