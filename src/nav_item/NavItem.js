import './NavItem.css';
import ButtonGroup from '../buttons_group/ButtonGroup.js';


export default function NavItem({
    alignType = 'horizontal',
    buttons = [
        {
            enable: true,
            text: 'Home',
            url: '/'
        },
        {
            enable: true,
            text: 'About us',
            url: '/about'
        },
        {
            enable: true,
            text: 'Contact us',
            url: '/contact'
        }
    ]
}){

    return(
            
        <nav className="nav-main-item">
            <ButtonGroup alignType={alignType} buttons={buttons} />   
        </nav>

    );
    

}

