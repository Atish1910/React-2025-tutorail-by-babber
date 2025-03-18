import React, { useState } from 'react';

const DynamicStyleClass = () => {
    const [colorRed, setColorRed] = useState("");
    const addColorDiv1 = (color) =>{
        setColorRed(color);
    }

    // div2 Toggle
    const [isDiv2Active, setisDiv2Active] = useState(false);
    const toggleColor = () =>{
        setisDiv2Active(!isDiv2Active)
    }

    // Div3 Input same
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const addNum1Class = (e) =>{
        setNum1(e.target.value);
    }
    
    const addNum2Class = (e) =>{
        setNum2(e.target.value);
    }

    // div4 Check box
    const [isDiv4Active , setisDiv4Active] = useState(false);
    const checkDiv4 = (e) =>{
        setisDiv4Active(e.target.checked);
    } 

    // div5 Add class From input
    const [ClassDiv5, setClassDiv5] = useState("");
    const addClassDiv5 = (e) =>{
        setClassDiv5(e.target.value)
    }


    return (
        <div>
            <div className="container border my-3 py-5">
                <div className="row ">
                    <h4>08: Add Dynamic Class & Style</h4>

                    <div className="col-lg-3">
                    <div className="py-3 mb-4 border" style={{'background-color': colorRed}}>Div1</div>
                        <button className="btn btn-danger" onClick={() => addColorDiv1("red")}>Add Red</button>
                        <button className="btn btn-primary" onClick={() => addColorDiv1("blue")}>Add Blue</button>
                    </div>
                    <div className="col-lg-3">
                        <div className="py-3 mb-4 border" style={{'background-color': isDiv2Active ? "red" : "green"}}>Div2</div>
                        <button className="btn btn-success" onClick={toggleColor}>Toggle</button>
                    </div>
                    <div className="col-lg-3">
                        <div className={`py-3 mb-4 border ${ num1 == num2 ? "bg-success" : "bg-danger"}` }>Div3</div>
                        <div className="gy-3">
                            <input type="text" onChange={(e) => addNum1Class(e)} />
                            <input type="text" onChange={(e) => addNum2Class(e)} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={`py-3 mb-4 border ${ isDiv4Active && "bg-success" || "bg-warning"}`} >Div4</div>
                        <div className="">
                            <select name="" id="">
                                <option value="" disabled>Select Your State</option>
                                <option value="">MH</option>
                                <option value="">Delhi</option>
                                <option value="">Gujrat</option>
                            </select>
                            <input type="checkbox" onChange={(e) => checkDiv4(e)} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={`py-3 mb-4 border ${ClassDiv5}` }>Div5</div>
                        <div className="gy-3">
                            <input type="text" placeholder='You can add custom class ' onChange={(e) => addClassDiv5(e)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicStyleClass;