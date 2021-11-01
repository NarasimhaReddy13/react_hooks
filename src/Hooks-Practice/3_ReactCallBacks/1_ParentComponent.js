// without using callbacks ----- all components are rendered when we click on one itself

import React, {useState, useCallback} from 'react'
import Count from './1_Count'
import Button from './1_Button'


function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]) 

    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age]) 

    return(
        <div>
            <Count text='Age' count = {age} />
            <Button handleClick={incrementAge}> Increment Age </Button>
            <Count text='Salary' count={salary}/>
            <Button handleClick = {incrementSalary}> Increment Salary </Button>            
        </div>
    )
}

export default ParentComponent


// React.memo() is a HOC --- that prevents a fun component from being rerendered if it's props and state donot change
// It has nothing to do hooks

// useCallback is a memoized version ----- no rerender any more