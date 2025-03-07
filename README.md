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
> About the **CardBranch**, **CardEmployee**, and **LinkButton** components 


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
            <!-- LinkButton component, this need the next properties: enable, text, url and action (several options) when you use the proprty action you can choose the next options to button types: edit, submit, link (default), delete, and info -->
            <!-- If none doesn't gave to component, this use the default properties. -->
            <LinkButton enable= {true} text={'Home'} url={'/Home/AllViews'} action={'edit'} />
        </nav>
    </>

```
More information about **LinkButton** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/link_button](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/link_button)


> [!TIP]
> The implementation of **CardBranch** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import CardBranch from './card_item/card_branch/CardBranch.js';

    //Add the component with next tag shown
    //The container of main components and CardEmployee <div> </div>
     <div className="App">
      <header className="App-header">
      </header>

        //The CardBranch has the next properties: title, buttons (array) this use the map function 
        // to create a LinkButton according to parameters passed to property. 
        
        //If none parameters is passed, this use the default values. 
        <CardBranch title={'Card Example'} buttons={
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

    </div>

```
More information about **CardBranch** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item/card_branch](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item/card_branch)



> [!TIP]
> The implementation of **CardEmployee** you can do it the follow way:

```javascript
    //Import the component with follow sentence above the main component with you've been work
    import CardEmployee from './card_item/card_employee/CardEmployee.js';

    //Add the component with next tag shown
    //The container of main components and CardEmployee <div> </div>
     <div className="App">
      <header className="App-header">
        
      </header>

        //The CardEmployee has the next properties: name, age, genre, work_description, branch, and 
        // buttons (array) this use the map function 
        // to create a LinkButton according to parameters passed to property.  

        //If none parameters is passed, this use the default values.
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

    </div>

```
More information about **CardEmployee** on [https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item/card_employee](https://github.com/johnnydldev/reactClientEnterpriseAPI/tree/main/src/card_item/card_employee)