
import './InputItem.css';


export default function InputItem({
    text = 'Name field',
    type = 'text',
    fontSize = '2rem',
    weight = 'bold',
    color = 'default'
}){
    
    color = color.toLowerCase();
    const arrayColors = ['default', 'red', 'green', 'purple', 'peach'];
    const colorExists = arrayColors.some((item) => item === color);

    console.log(colorExists);

    if(colorExists){
        return(
            <>
                <label className={"label-"+color+"-by-item label-spacing"} >{text+":"}</label>
                <input className={"input-"+color+"-by-item input-spacing"} type={type} placeholder={"Add the "+text}></input>
            </>
        );
    }

    return(
        <>
            <label className={"label-default-by-item label-spacing"} >{text+":"}</label>
            <input className={"input-default-by-item input-spacing"} type={type} placeholder={"Add the "+text}></input>
        </>
    );

    
}

