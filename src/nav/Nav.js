import React, {Component} from 'react';
import LinkButton from '../link_button/LinkButton.js';


export default class NavItem extends Component{
    state ={
        branch:{
            url: '/branches',
            text: 'Sucursales'
        },
        employee:{
            url: '/employees',
            text: 'Empleados'
        }
    }//End states

    render(){
        return(
            <>
                <nav className="nav-main-item">
                    <LinkButton enable= {true} name={'Home'} url={'/Home/AllViews'}></LinkButton>
                </nav>
            </>
        );
    }//End render

}

