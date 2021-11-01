import React from 'react'

function Count ({text, count}){
    console.log(`Count ${text}`)
    return <> {text} - {count} </>
}
export default React.memo(Count)

// After using React.memo() also some components will render --- Why ?
// As they are dependent 