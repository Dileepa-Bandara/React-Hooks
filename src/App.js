import React from 'react';
import UseEffectHook from "./components/UseEffectHook/UseEffectHook";
import UseRefHook from './components/UseRefHook/UseRefHook';

function App (){
    return (
        <div>
            App
            <UseEffectHook/>
            <UseRefHook></UseRefHook>
        </div>
    )
}


export default App;