import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import CardBranch from './card_item/card_branch/CardBranch.js';
import CardEmployee from './card_item/card_employee/CardEmployee.js';
import FormBranch from './form_item/form_branch/FormBranch.js';
import FormEmployee from './form_item/form_employee/FormEmployee.js';
import './SharedStylesComponents.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <LinkButton enable={true} text={'Home'} url={'/Home/AllViews'} />

        <CardBranch 
        
        labels={
          [
            {
              title: 'Branch Name',
              text: 'Coca cola'
            }
          ]
        } 
        
        buttons={
          [{
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
        } />
        
        <CardEmployee buttons={
          [{
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
        } />

      </header>

       <section className="App-section">
       <FormBranch inputs={[
        {
          text: 'Nombre de la Marca',
          type: 'text'
        }
       ]}/>

        <FormEmployee  />

       </section>

      <footer className="App-footer">

      </footer>

    </div>

  );
}

export default App;
