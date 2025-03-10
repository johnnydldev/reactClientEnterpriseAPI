import './CardItem.css';
import LinkButton from '../link_button/LinkButton.js';
import LabelItem from '../label_item/LabelItem.js';

export default function CardItem({
    title = 'Title Card',
    
    labels = [{
        title: 'Title',
        text: 'Some Text',
        color: 'default'
    }],

    buttons = [{
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
    }]
}){


    return(
        <div className="glass-morphysm vertical-align card-container">
            <span className="title-card glass-morphysm" >{title.toUpperCase()}</span>

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