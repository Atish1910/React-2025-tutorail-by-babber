import React, {useState } from 'react';

const UseStateArray = () => {

    const [cityList, setCityList] = useState(["Pune", "Mumbai", "Latur"]);

    const[cityName, setCityName] = useState("");

    const changeCityName = (e) =>{
        setCityName(e.target.value);
    };

    const updateCity = () =>{
        setCityList(oldCity => [...oldCity, cityName] );
        // e.target.value = "";
    }

    return (
        <section className="container">
        <h6>Hey I Am Learning UseState</h6>
<div className="row">
    <div className="col-4 mb-4 py-5 border">
        <p>{cityList}</p>
        <input type='text' className='form-control mb-4' onChange={(e) => changeCityName(e)} />
        <button className='btn btn-primary' onClick={updateCity}>Change Course Name</button>
    </div>
</div>
</section>
    );
};

export default UseStateArray;