import './CardEmployee.css';
import LinkButton from '../../link_button/LinkButton.js';

export default function CardEmployee({
    name = 'Paul',
    age = 27,
    genre = 'alien',
    work_description = 'Developer',
    branch = 'Jumex',
    buttons = []
}){

    return(
        <>
            <label>{name}</label>
            <label>{age}</label>
            <label>{genre}</label>
            <label>{work_description}</label>
            <label>{branch}</label>

            {buttons.map((item) => (
                <LinkButton enable={item.enable} text={item.text} url={item.url} />
            ))}
 
        </>
    );

}