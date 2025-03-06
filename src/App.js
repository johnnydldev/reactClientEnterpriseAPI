import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import CardBranch from './card_item/card_branch/CardBranch.js';
import CardEmployee from './card_item/card_employee/CardEmployee.js';
import FormBranch from './form_item/form_branch/FormBranch.js';
import FormEmployee from './form_item/form_employee/FormEmployee.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LinkButton enable={true} text={'Home'} url={'/Home/AllViews'}/>
        <CardBranch title={'Card Example'} buttons={
          [{
            enable: true,
            text: 'Edit',
            url: './notFound'
          },
          {
            enable: false,
            text: 'Delete',
            url: './notFound'
          }]
        } />
        
        <CardEmployee buttons={
          [{
            enable: true,
            text: 'Edit',
            url: './notFound'
          },
          {
            enable: false,
            text: 'Delete',
            url: './notFound'
          }]
        } />

      </header>

      <FormBranch title={'Branch Name'} buttons={
        [
          {
            enable: false,
            text: 'Submit',
            url: './NotFound'
          },
          {
            enable: true,
            text: 'Back home',
            url: './NotFound'
          }
        ]}
      />

      <FormEmployee  buttons={
        [
          {
            enable: false,
            text: 'Submit',
            url: './NotFound'
          },
          {
            enable: true,
            text: 'Back home',
            url: './NotFound'
          }
        ]}
      />

    </div>
  );
}

export default App;
