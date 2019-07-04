import { createStore } from "redux";
import reducers from "./reducers"; 
//when not specify the file, it automatically imports the index.js from that folder

export default createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
