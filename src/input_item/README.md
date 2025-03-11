
> [!IMPORTANT]
> ## About the InputItem component
>
>This component has several color types to work that are styled by the CSS class according
which is selected on its called and declaring, if you not specified none **color type specific** 
the **InputItem** load the **default** color style by default. Follow show the different types of color inputs.

The color types to choose are the next follows:
```
    default(black)
    green
    peach
    purple
    red
```

> [!IMPORTANT] 
> This component has the next properties: text, type, and color.
> The text property (string) is used to show the placeholder into input and heading label of inputselft.
> The type property (string) is used to create an input type requested.
> The color property (string) is used to assign a color according the color types shown above. 

> [!TIP]
> ## To use the default InputItem you should only called the component the follow way:
>
> ```javascript
>    import InputItem from 'src/input_item/InputItem.js';
>
>   <>
>       <InputItem type={'text'} text={'Hola'} color={'purple'} />
>   </>
>
> ```


