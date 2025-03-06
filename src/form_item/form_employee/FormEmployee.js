import './FormEmployee.css';
import LinkButton from '../../link_button/LinkButton.js'; 

export default function FormEmployee({
    name = 'Employee name',
    age_title = 'Employee age',
    genre_title = 'Employee genre',
    work_description_title = 'Employee work description', 
    buttons = []
}){

    return(
        <>
            <form>

                <label>{name}</label>
                <input type="text" placeholder={"Add the "+name}></input>
                
                <label>{age_title}</label>
                <input type="number" placeholder={"Add the "+age_title}></input>
                
                <label>{genre_title}</label>
                <input type="text" placeholder={"Add the "+genre_title}></input>

                <label>{work_description_title}</label>
                <input type="text" placeholder={"Add the "+work_description_title}></input>

                {buttons.map( item =>(
                    <LinkButton enable={item.enable} text={item.text} url={item.url} />
                ))}
            </form>
        </>
    );

}