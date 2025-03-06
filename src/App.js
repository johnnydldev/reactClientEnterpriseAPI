import logo from './logo.svg';
import './App.css';
import NotFound from './not_found/NotFound.js';
import LinkButton from './link_button/LinkButton.js';
import CardBranch from './card_item/card_branch/CardBranch.js';
import CardEmployee from './card_item/card_employee/CardEmployee.js';


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
    </div>
  );
}

export default App;
