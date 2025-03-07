import './CardBranch.css';
import LinkButton from '../../link_button/LinkButton.js';

export default function CardBranch({
    title = 'something',
    buttons = []
}){

    return(
        <>
            <label>{title}</label>

            {buttons.map((item) => (
                <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
            ))}
 
        </>
    );

}