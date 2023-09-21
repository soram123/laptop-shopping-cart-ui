
export const add = (data) => {
    return {
      type: 'ADD_PRODUCT',
      payload:data
    };
  };
  
  export const remove = (data) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload:data
    };
  };

  export const update = () => {
    return {
      type: 'EDIT_PRODUCT',
    };
  };
  