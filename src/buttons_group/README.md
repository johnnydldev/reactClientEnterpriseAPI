

> [!IMPORTANT]
> ## About the ButtonGroup component
>
>This component has several color types (action property) to work that are styled by the CSS class according which is selected on its called and declaring, if you not specified none **color type specific** each **LinkButton** on **ButtonGroup** array this load the **default** color style by default. Follow show the different types of color inputs.

The color types to choose are the next follows:
```
    link(black)
    submit(green)
    delete(purple)
    edit(peach)
    info(viridian)
    back(gray)
```

> [!IMPORTANT] 
> This component has the next properties: alignType, and Buttons.
> The alignType property (string) is used to align the components' items on vertical or horizontal way.
> The buttons property (array) is used to create an buttons group of type requested.
> If none value is passed to ButtonGroup this will use the default properties. 

> [!TIP]
> ## To use the default ButtonGroup you should only called the component the follow way:
>
> ```javascript
>    import ButtonGroup from 'src/buttons_group/ButtonGroup.js';
>
>   <>
>       <ButtonGroup
>         alignType={'vertical'}
>         
>          buttons={
>            [{
>              enable: true,
>              text: 'Edit',
>              url: './notFound',
>              action: 'edit'
>            },
>            {
>              enable: false,
>              text: 'Delete',
>              url: './notFound',
>              action: 'delete'
>            }]
>          } 
>        />
>   </>
>
> ```






