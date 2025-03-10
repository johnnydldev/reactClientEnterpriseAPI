
const arrayColors = ['default', 'red', 'green', 'purple', 'peach'];

const arrayActions = ['link', 'submit', 'edit', 'delete', 'info', 'back'];

export const colorInput = (color) => {return arrayColors.some((item)=> item === color)} 
    

export const actionInput = (action) => { return arrayActions.some((item)=> item === action) }






