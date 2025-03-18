import React from "react";


const EventBinding = () =>{

    const showalert = () =>{
        alert("Yes I am Redering");
    };

    const showMsg = (msg) =>{
        alert(msg);
    }

    const onChangeCity = () =>{
        alert("Hey City Has been Change");
    }

    const oncityTextChange = () =>{
        console.log("Change the text")
    };

    const onTextChangeInput = (dynamicText) =>{
        console.log(dynamicText.target.value);
    }
    


    return (
        <div>
            <button onClick={showalert} className=" btn btn-primary">Show Alert</button>

            <button onClick={() => showMsg("Hey My button is 1 I am justt getting Click Ny Atish")} className=" btn btn-primary">Show Dynamic Msg</button>

            <select onChange={onChangeCity}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <input onChange={oncityTextChange}/>
            <input onChange={(dynamicText) => onTextChangeInput(dynamicText)}/>

        </div>
    )
}
export default EventBinding;