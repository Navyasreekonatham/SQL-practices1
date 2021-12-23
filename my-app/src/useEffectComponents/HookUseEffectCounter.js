import React, {useState, useEffect} from 'react';

function HookUseEffectCounter(){
    const [count, setCount]=useState(0)

    useEffect(()=>{
        document.title = `Render these many times ${count}`
    })

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
        
    )
}

export default HookUseEffectCounter;