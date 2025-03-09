import './LabelItem.css';

export default function LabelItem({
    title = 'Title',
    text = 'Some text'
}){

    return(
        <>
            <label>{title+":"} {text}</label>
        </>
    );

}