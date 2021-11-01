import React, {useReducer} from 'react';
import './App.css';
import HookCounterTwo from './Prac/1_components/A_2_HookCounter2';
import UnMountCase from './Prac/1_components/B_4_CompWillUm(useEffectHook)';
import ClearIntervalHook from './Prac/1_components/C_1_ClearTimer';

// import DataFetchingSinglePostButton from './components/D_3_GetSinglePost2';

import UseReducerCounter from './2_useReducer/A_2_useReducer';
import UseReducerCounter2 from './2_useReducer/A_2_useReducer(Counter)2';

// First 2 steps for context is Same

import DataFetchUseReducer from './2_useReducer/C_1_DataFetchuseReducer';

import ParentComponent from './3_ReactCallBacks/1_ParentComponent';

import UseRef from './3_ReactCallBacks/3_useRef';

import CounterOne from './4_CustomHooks/1_CounterOne';
import CounterTwo from './4_CustomHooks/2_counterTwo';


import ComponentA from './Prac/5_useReducer_useContext/ComponentA';
import ComponentB from './Prac/5_useReducer_useContext/ComponentB';

import Component1 from './3_useContext/Component1';
import UseMemoHook from './3_ReactCallBacks/2_useMemo';

import CustomHookFetch from './4_CustomHooks/CustomHookFetch';

export const CountContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App1() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <HookCounterTwo/>

      <UnMountCase/>

      <ClearIntervalHook/>

      {/* <DataFetchingSinglePostButton/> */}


      
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
          <ComponentA/>
          <ComponentB/>
        </div>
      </CountContext.Provider>



      {/* <UseReducerCounter/>
      <UseReducerCounter2/>

      <DataFetchUseReducer/>

      <ParentComponent/>

      <UseRef/>

      <CounterOne/>
      <CounterTwo/>

      <Component1/>

      <UseMemoHook/> */}


      {/* <CustomHookFetch/> */}
    </div>
  )
}

export default App1;

// This is for Hooks Practice