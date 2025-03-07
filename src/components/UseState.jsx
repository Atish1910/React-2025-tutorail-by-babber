import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <>
          <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <p id="para">you click below button {count} times</p>
                <button id='btn' onClick={() => (setCount(count+1))} className='btn btn-success'>Click On button </button>
            </div>
            </div>    
        </div>  
        </>
    );
};

export default UseState;