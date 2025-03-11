
> [!IMPORTANT]
> ## About the CardItem component
>
>This component implement the **ButtonGroup** component. The NavItem has the next properties: align, buttons (array) those use the map function. To create a GroupButtons with align vertical or horizontal according to parameters passed you use the alignType property. To create a LinkButton according to parameters passed to buttons property. If none parameters is passed, this use the default values.

Types of orientation are: 'vertical' and 'horizontal' 

> [!TIP]
> The implementation of **NavItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import NavItem from 'src/nav_item/NavItem.js';

    //Add the component with next tag shown
    //The container of main components is <nav> </nav>
     <div className="App">
      <header className="App-header">
      </header>
 
        <NavItem
          alignType={'vertical'}
          
          buttons={
            [
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
          } 
        />

    </div>

```
More information about **ButtonGroup** on [ButtonGroup JS Component](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/buttons_group)






