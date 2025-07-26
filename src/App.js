import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import NavItem from './nav_item/NavItem.js';
import CardItem from './card_item/CardItem.js';
import FormBranch from './form_item/FormItem.js';
import FormEmployee from './form_item/FormItem.js';
import './SharedStylesComponents.css';


function App() {

  return (
    <div className="App">

      <header className="App-header">
        
        <NavItem alignType=''/>

      </header>

       <section className="App-section">
        <CardItem title='Empleado' 

        labels = {[{
          title: 'Nombre',
          text:'Jonathan Ivan',
          color: 'purple'
        },
        {
          title: 'Apellidos',
          text:'Delgado López',
          color: 'green'
        },
        {
          title: 'Puesto',
          text:'Desarrollador',
          color: 'kabul'
        }
        ]}
        />

        <FormEmployee title='Envia Comentarios' type='contact' inputs={
        [{
          text: 'Asunto',
          type: 'text',
          color: 'green'
        },]
        }
        
        
        textarea = {
          {
            text: "Comentarios",
            color: 'purple'
          }
        }
        />

       </section>

      <footer className="App-footer">

      </footer>

    </div>

  );

}

export default App;
