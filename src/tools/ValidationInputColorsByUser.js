
const arrayColors = ['default', 'red', 'green', 'purple', 'peach'];

const arrayActions = ['link', 'submit', 'edit', 'delete', 'info', 'back'];

const arrayAligns = ['horizontal', 'vertical'];

export const colorInput = (color) => {return arrayColors.some((item)=> item === color)}

export const alignInput = (align) => {return arrayAligns.some((item)=> item === align)} 
    
export const actionInput = (action) => { return arrayActions.some((item)=> item === action) }






