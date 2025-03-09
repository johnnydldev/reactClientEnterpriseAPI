import './LabelItem.css';

export default function LabelItem({
    title = 'Title',
    text = 'Some text',
    color = 'default'
}){

    color = color.toLowerCase();
    const arrayColors = ['default', 'green', 'purple', 'peach', 'gray', 'kabul'];
    const colorExists = arrayColors.some((item) => item === color);

    if(colorExists){
        return(
            <>
                <label className={"label-"+color+"-item"}>
                    <span className={"label-"+color+"-title"}>{title}: </span>
                    {text}
                </label>
            </>
        );
    }

    return(
        <>
            <label className={"label-default-item"}>
                <span className={"label-default-title"}>{title}: </span>
                {text}
            </label>
        </>
    );

}