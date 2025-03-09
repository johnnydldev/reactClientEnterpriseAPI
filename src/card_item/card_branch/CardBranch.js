import './CardBranch.css';
import LinkButton from '../../link_button/LinkButton.js';
import LabelItem from '../../label_item/LabelItem.js';

export default function CardBranch({
    labels = [{
        title: 'Title',
        text: 'Some Text',
        color: 'default'
    }],
    buttons = []
}){

    return(
        <div className="glass-morphysm card-container">

            {labels.map((item)=>(
                <LabelItem title={item.title} text={item.text} color={item.color}/>
            ))}

            <div className="buttons-container horizontal-align">
                {buttons.map((item) => (
                    <LinkButton enable={item.enable} text={item.text} url={item.url} action={item.action} />
                ))}
            </div>
 
        </div>
    );

}