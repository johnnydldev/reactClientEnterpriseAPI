import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import CardItem from './card_item/CardItem.js';
import FormBranch from './form_item/form_branch/FormBranch.js';
import FormEmployee from './form_item/form_employee/FormEmployee.js';
import './SharedStylesComponents.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <LinkButton enable={true} text={'Home'} url={'/Home/AllViews'} />

        <CardItem 
        
        title = {'Marca'}

        labels={
          [
            {
              title: 'Branch Name',
              text: 'Coca cola',
              color: ''
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

        <CardItem 
        
        title ={'Empleado'}
          labels={
            [
              {
                title: 'Employee Name',
                text: 'Paul',
                color: ''
              },
              {
                title: 'Employee Age',
                text: '200 years old',
                color: ''
              },
              {
                title: 'Employee Genre',
                text: 'Alien',
                color: ''
              },
              {
                title: 'Employee Work',
                text: 'Developer',
                color: ''
              },
            ]
          } 
        />


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
