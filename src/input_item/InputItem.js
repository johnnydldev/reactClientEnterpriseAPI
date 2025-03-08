
import './InputItem.css';


export default function InputItem({
    text = 'Name field',
    type = 'text',
    fontSize = '2rem',
    weight = 'bold',
    color = 'default'
}){

    return(
        <>
            <label className={"Label-"+color+"-by-item"} >{text+":"}</label>
            <input className={"Input-"+color+"-by-item"} type={type} placeholder={"Add the "+text}></input>
        </>
    );

}

