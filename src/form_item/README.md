> [!IMPORTANT]
> ## About the FormItem component
>
>This component can implement three components or by default two components. The InputItem, TextAreaItem and the ButtonGroup component, this receive five parameters the title, type, textarea, inputs, and buttons properties if its type is 'contact'. Some properties are independent components based. Bellow are shown the information and implementation of **FormItem**.  


> [!IMPORTANT] 
> This component has the next properties: title, type, textarea, inputs, and buttons.
> ```
>  The title property (string) is used to assign the **FormItem**'s title.
>  The type property (string) is used to assign the **FormItem**'s type (not necessary for default FormItem).
>  The textarea property (object) is used to assign the **FormItem**'s data **TextAreaItem** (not necessary for default FormItem).
>  The inputs property (array) is used to create an inputs group according the number objects passed into the array.
>  The buttons property (array) is used to create an buttons group of type requested.
>  If none value is passed to ButtonGroup this will use the default properties. 
>```

> [!TIP]
> ## To use the default CardItem you should only called the component the follow way:
>
> ```javascript
>    import FormItem from 'src/form_item/FormItem.js';
>
>   <>
>       <FormItem
>         title={'Branch'}
>         
>         type={'contact'}
>
>         textarea = {
>           {
>              text: 'Comments', 
>              color: 'purple'
>           }
>         }
>
>         inputs = {
>            [{
>                    title: 'Branch Name',
>                    text: 'Coca cola',
>                    color: 'default'
>             }]
>         }
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

More information of **InputItem** on next link:[InputItem JS component](https://github.com/johnnydldev/reactClientEnterpriseAPI/blob/main/src/input_item) 

More information of **TextAreaItem** on next link:[TextAreaItem JS component](https://github.com/johnnydldev/reactClientEnterpriseAPI/blob/main/src/input_item/text_area_item) 

More information of **LinkButton** on next link:[LinkButton JS component](https://github.com/johnnydldev/reactClientEnterpriseAPI/blob/main/src/link_button) 

