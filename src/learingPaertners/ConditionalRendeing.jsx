import React, { useState } from 'react';

const ConditionalRendeing = () => {
    // DIV1
    const [isDiv1Visible, setDiv1] = useState(true);
    
    const hideDiv1 = () =>{
        setDiv1(false)
    };
    const showDiv1 = () =>{
        setDiv1(true)
    };

    // Div2
    const [isDiv2Visible, setDiv2] = useState(false);
    const showHideDiv2 = () =>{
        setDiv2(!isDiv2Visible);
    }

    // Div3 
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const changeInput1 = (e) =>{
        setInput1(e.target.value);
    }
    const changeInput2 = (e) =>{
        setInput2(e.target.value);
    }

    // div4
    const [option, setOption] = useState("USA");
    const optionUpdate = (e) =>{
        setOption(e.target.value);
    }

    // div5
    const [isActive, setActive] = useState(false);

    const changeActive = (e) =>{
        setActive(e.target.checked)
    }



    return (
        <div>
            <section className='container '>
            <div className="row">
                <h1> 06: Conditional Rendering</h1>
                <div className="row py-5 border justify-content-center align-items-streched">
                    <div className="col-md-3 py-5 border border-dark mb-4">
                        <div className="">
                        {
                            isDiv1Visible && <div className="border bg-danger py-4 mb-4" >Div1</div>
                        }
                        
                            <button className="btn btn-primary" onClick={hideDiv1}>Hide</button>
                            <button className="btn btn-danger" onClick={showDiv1}>Show</button>
                        </div>
                    </div>
                    <div className="col-md-3 py-5 border border-dark">
                        <div className="">
                        {
                            isDiv2Visible && <div className="border py-4 bg-success">Div2</div>
                        }
                            <button className="btn btn-success" onClick={showHideDiv2}>Toggle</button>
                        </div>
                    </div>
                    <div className="col-md-3 py-5 border border-dark">
                            -{input1} - {input2}
                            {
                                input1 == input2 &&  <div className="border bg-secondary py-4">Div3</div>
                            }
                        <div className=" d-flex justify-content-center align-items-center">
                            
                        <input type="text" className="form-control" onChange={(e) =>changeInput1(e)} placeholder=''/>
                        <input type="text" className="form-control"  onChange={(e) =>changeInput2(e)} placeholder=''/>
                        </div>
                    </div>
                    <div className="col-md-3 py-5 border border-dark">
                        {
                            option == "USA" && <div className="border bg-secondary py-4">Div3</div>
                        }
                        <div className="">
                            <select name="" onChange={(e) => optionUpdate(e)} id="">
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Shrilank">Shrilank</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 py-5 border border-dark mt-5">
                            {
                                isActive && <div className="border bg-secondary py-4">Div4</div>
                            }
                        <div className="">
                            <input type="checkbox" onChange={(e) => changeActive(e)} class="form-check-input"></input>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ConditionalRendeing;