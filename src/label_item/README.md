
> [!IMPORTANT]
> ## About the LabelItem component
>
>This component has several color types to work that are styled by the CSS class according
which is selected on its called and declaring, if you not specified none **color type specific** 
the **Labeltem** load the **default** color style by default. Follow show the different types of color inputs.

The color types to choose are the next follows:
```
    default(black)
    green
    peach
    purple
    kabul
    gray
```

> [!IMPORTANT] 
> This component has the next properties: text, type, and color.
> The title property (string) is used to show the heading before the value label.
> The text property (string) is used to show the value on label.
> The color property (string) is used to assign a color according the color types shown above.
> If none value is passed to LabelItem this will use the default properties. 

> [!TIP]
> ## To use the default LabelItem you should only called the component the follow way:
>
> ```javascript
>    import LabelItem from 'src/label_item/LabelItem.js';
>
>   <>
>       <LabelItem title={'Name'} text={'Saday'} color={'purple'} />
>   </>
>
> ```



