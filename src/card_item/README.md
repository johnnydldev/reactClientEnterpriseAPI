
> [!IMPORTANT]
> ## About the CardItem component
>
>This component implememt two components. The LabelItem and the ButtonGroup component, this receive three parameters the title, labels, and buttons properties. Some properties ared indepent components based. Bellow are shown the information and implementation of **CardItem**.  


> [!IMPORTANT] 
> This component has the next properties: title, labels, and buttons.
> The title property (string) is used to assign the CardItem's title .
> The labels property (array) is used to create an labels group according the number objects passed into the array.
> The buttons property (array) is used to create an buttons group of type requested.
> If none value is passed to ButtonGroup this will use the default properties. 

> [!TIP]
> ## To use the default CardItem you should only called the component the follow way:
>
> ```javascript
>    import CardItem from 'src/card_item/CardItem.js';
>
>   <>
>       <CardItem
>         title={'Branch'}
>         
>          labels = {
>            [{
>                    title: 'Branch Name',
>                    text: 'Coca cola',
>                    color: 'default'
>             }]
>           }
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

More information of **LabelItem** on next link:[LabelItem JS component](https://github.com/johnnydldev/reactClientEnterpriseAPI/blob/main/src/label_item) 


More information of **LinkButton** on next link:[LinkButton JS component](https://github.com/johnnydldev/reactClientEnterpriseAPI/blob/main/src/link_button) 


