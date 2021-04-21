const initialWagonState ={
    supplies:100,
    distance:0,
    days:0,
    cash:200,
    
}

const gameReducer =(state=initialWagonState,action)=>{
         
    switch(action.type){
        
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies+15,
                days: state.days+1,

            };
        }
        case 'travel':{
            const days = action.payload;
            const leftSupplies = state.supplies-20*days;

            return leftSupplies<0 ?state :{
                ...state,
                supplies:state.supplies -20*days,
                distance: state.distance + 10*days,
                days: state.days + days,
            };
        }
        case 'tippedWagon' :{
            return {
                ...state,
                supplies: state.supplies -30,
                days:state.days + 1,
            };
        }
        case 'sell' :{
            let currentSupplies = state.supplies;
            if(currentSupplies>=20){
                return {
                    ...state,
                    supplies : currentSupplies-20,
                    cash : state.cash +5,

                };
            }
             return state;
        }
        case 'buy':{
            let currentCash =  state.cash ;
            if(currentCash>=15){
                return {
                    ...state,
                    cash: state.cash-5,
                    supplies: state.supplies+25,

                };
            }
            else return state;
        }
        case 'theft':{
            
            return state.cash<=0?  state: {
                 ...state,
                 cash:state.cash/2,

            };
        }
        default: return state;


    }

}

const travel = {
    type: 'travel',
    payload:1,
}
const gather ={
    type: 'gather',
    
}
const tippedWagon ={
    type: 'tippedWagon',
    
}

let wagon =gameReducer(undefined,{});
console.log(wagon);
wagon = gameReducer(wagon,travel);
console.log(wagon);
wagon = gameReducer(wagon,gather);
console.log(wagon);
wagon = gameReducer(wagon,tippedWagon);
console.log(wagon);
wagon = gameReducer(wagon,{type:'sell',});
console.log(wagon);
wagon = gameReducer(wagon,{type:'sell',});
console.log(wagon);
wagon = gameReducer(wagon,{type:'sell',});
console.log(wagon);
wagon = gameReducer(wagon,{type:'buy',});
console.log(wagon);
wagon = gameReducer(wagon,{type:'buy',});
console.log(wagon);
wagon = gameReducer(wagon,{type:'theft',});
console.log(wagon);



