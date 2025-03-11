
> [!IMPORTANT]
> ## About the TextAreaItem component
>
>This component has several color types to work that are styled by the CSS class according
which is selected on its called and declaring, if you not specified none **color type specific** 
the **TextAreaItem** load the **default** color style by default. Follow show the different types of color inputs.

The color types to choose are the next follows:
```
    default(black)
    green
    peach
    purple
    red
```

> [!IMPORTANT] 
> This component has the next properties: text, and color.
> The text property (string) is used to show the placeholder into input and heading label of textareaselft.
> The color property (string) is used to assign a color according the color types shown above. 
> If none value is passed to TextAreaItem this will use the default properties.

> [!TIP]
> ## To use the default TextAreaItem you should only called the component the follow way:
>
> ```javascript
>    import TextAreaItem from 'src/input_item/text_area_item/TextAreaItem.js';
>
>   <>
>       <TextAreaItem text={'Comments'} color={'green'} />
>   </>
>
> ```


