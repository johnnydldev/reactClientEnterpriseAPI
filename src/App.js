import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import CardItem from './card_item/CardItem.js';
import FormBranch from './form_item/FormItem.js';
import FormEmployee from './form_item/FormItem.js';
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
            color: 'edit'
          },
          {
            enable: false,
            text: 'Delete',
            url: './notFound',
            color: 'delete'
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
       <FormBranch 
        title = {'Branch Form'}

        inputs={[
          {
            text: 'Nombre de la Marca',
            type: 'text'
          }
        ]}
       />

        <FormEmployee  

          inputs={[
            {
              text: 'Employee name',
              type: 'text'
            },
            {
                text: 'Employee age',
                type: 'text'
            },
            {
                text: 'Employee genre',
                type: 'text'
            },
            {
                text: 'Employee work description',
                type: 'text'
            }
          ]}

        />

       </section>

      <footer className="App-footer">

      </footer>

    </div>

  );
}

export default App;
