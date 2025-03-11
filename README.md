# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> [!IMPORTANT]
> ## Available Scripts

In the project directory, you can run:

> [!TIP]
> ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

> [!TIP]
> ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> [!TIP]
> ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

> [!CAUTION]
### `npm run eject`

> [!NOTE]
**this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

> [!IMPORTANT]
> ## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

> [!TIP]
> ### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

> [!TIP]
> ### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

> [!TIP]
> ### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

> [!TIP]
> ### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

> [!TIP]
> ### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

> [!TIP]
> ### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


> [!IMPORTANT]
> About the **NavItem**, **FooterItem**, **GroupButton**, **CardItem**, **LabelItem**, 
> **InputItem**, **TextAreaItem**, **FormItem**, and **LinkButton** components 

> [!TIP]
> The implementation of **LabelItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import LabelItem from '../../label_item/LabelItem.js';

    //Add the component with next tag shown
    //The container of main component and LabelItem <> </>
    <> 
        <!-- The navigation tag to header (main component) -->
        <div className="main-item">
            <!-- LabelItem component, this need the next properties: title, text.
            <!-- If none doesn't gave to component, this use the default properties. -->
            <LabelItem title= {'Name'} text={'John'} color={'purple'}/>
            <LabelItem title= {'Age'} text={'60 years old'} color={'green'} />
            <LabelItem title= {'Genre'} text={'Male'} />
        </div>
    </>

```
More information about **LabelItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/label_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/label_item)


> [!TIP]
> The implementation of **InputItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import InputItem from '../../input_item/InputItem.js';

    //Add the component with next tag shown
    //The container of main component and InputItem <> </>
    <> 
        <!-- The navigation tag to header (main component) -->
        <div className="main-item">
            <!-- InputItem component, this need the next properties: title, text.
            <!-- If none doesn't gave to component, this use the default properties. -->
            <InputItem title= {'Name'} text={'John'} color={'purple'}/>
            <InputItem title= {'Age'} text={'60 years old'} color={'green'} />
            <InputItem title= {'Genre'} text={'Male'} />
        </div>
    </>

```
More information about **InputItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/input_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/input_item)


 [!TIP]
> The implementation of **TextAreaItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import TextAreaItem from '../../input_item/text_area_item/TextAreaItem.js';

    //Add the component with next tag shown
    //The container of main component and TextAreaItem <> </>
    <> 
        <!-- The navigation tag to header (main component) -->
        <div className="main-item">
            <!-- InputItem component, this need the next properties: color and text.
            <!-- If none doesn't gave to component, this use the default properties. -->
            <TextAreaItem text={'John'} color={'purple'}/>
            <TextAreaItem text={'60 years old'} color={'green'} />
            <TextAreaItem text={'Male'} />
        </div>
    </>

```
More information about **TextAreaItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/input_item/text_area_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/input_item/text_area_item)


> [!TIP]
> The implementation of **LinkButton** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import LinkButton from '../../link_button/LinkButton.js';

    //Add the component with next tag shown
    //The container of main component and LinkButton <> </>
    <> 
        <!-- The navigation tag to header (main component) -->
        <nav className="nav-main-item">
            <!-- LinkButton component, this need the next properties: enable, text, url and action (several options) when you use the property color you can choose the next options to button types: submit, edit, link(default), delete, back, and info -->
            <!-- If none doesn't gave to component, this use the default properties. -->
            <LinkButton enable= {true} text={'Home'} url={'/Home/AllViews'} action={'edit'} />
            <LinkButton enable= {true} text={'Home'} url={'/Home/AllViews'} action={'delete'} />
            <LinkButton enable= {true} text={'Home'} url={'/Home/AllViews'} action={'info'} />
            <LinkButton enable= {true} text={'Home'} url={'/Home/AllViews'} />
        </nav>
    </>

```
More information about **LinkButton** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/link_button](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/link_button)


> [!TIP]
> The implementation of **CardItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import CardItem from './card_item/CardItem.js';

    //Add the component with next tag shown
    //The container of main components <div> </div>
     <div className="App">
      <header className="App-header">
      </header>

        //The CardItem has the next properties: title, labels (array), buttons (array) those use the map function 
        // to create a LabelItem according to parameters passed to labels property. 
        // to create a LinkButton according to parameters passed to buttons property. 
        
        //If none parameters is passed, this use the default values. 
        <CardItem
          title={'Marca'}

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
          } 
        />

    </div>

```
More information about **CardItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item)


> [!TIP]
> The implementation of **FormItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import FormItem from './Form_item/FormItem.js';

    //Add the component with next tag shown
    //The container of main components <div> </div>
     <div className="App">
      <header className="App-header">
      </header>

        //The FormItem has the next properties: title, type, textarea, inputs (array), buttons (array) those use the map function 
        // to create a contact form use the type property with value 'contact'
        // to create a InputItem according to parameters passed to inputs property. 
        // to create a LinkButton according to parameters passed to buttons property. 
        
        //If none parameters is passed, this use the default values. 
        <FormItem
          title={'Marca'}

          inputs={
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
          } 
        />

    </div>

```
More information about **FormItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/form_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/form_item)


> [!TIP]
> The implementation of **GroupButton** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import GroupButton from './buttons_group/GroupButton.js';

    //Add the component with next tag shown
    //The container of main components <div> </div>
     <div className="App">
      <header className="App-header">
      </header>

        //The GroupButton has the next properties: align, buttons (array) those use the map function 
        // to create a GroupButtons with align vertical or horizontal according to parameters passed you use the alignType property. 
        // to create a LinkButton according to parameters passed to buttons property. 
        
        //If none parameters is passed, this use the default values. 
        <GroupButton
          alignType={'vertical'}
          
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
          } 
        />

    </div>

```
More information about **GroupButton** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/buttons_group](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/buttons_group)



> [!TIP]
> The implementation of **NavItem** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import NavItem from './nav_item/NavItem.js';

    //Add the component with next tag shown
    //The container of main components is <nav> </nav>
     <div className="App">
      <header className="App-header">
      </header>

        //The NavItem has the next properties: align, buttons (array) those use the map function 
        // to create a GroupButtons with align vertical or horizontal according to parameters passed you use the alignType property. 
        // to create a LinkButton according to parameters passed to buttons property. 
        
        //If none parameters is passed, this use the default values. 
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
More information about **NavItem** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/nav_item](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/nav_item)



