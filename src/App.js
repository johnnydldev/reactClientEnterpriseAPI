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

      </header>

       <section className="App-section">

        <CardItem />

        <FormBranch />

       </section>

      <footer className="App-footer">

      </footer>

    </div>

  );
}

export default App;
