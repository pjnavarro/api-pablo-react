

const initialState = {
    countries: [],
    headers:[
        {
         label: 'Nombre',
         key: 'name'
        },{
          label: 'Codigo',
          key: 'code'
        },{
          label: 'Id',
          key: 'id'
        }
      ]
}

export default (state = initialState, action) =>{
    switch(action.type){
        default:
            return {...state};
    }
}