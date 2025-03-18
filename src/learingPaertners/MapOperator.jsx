import React from 'react';

const MapOperator = () => {
    const cityArray = ["Mumbai", "Pune ", "Kolhapur", "Satara"];
    return (
        <section>
            <div class="container py-5 my-3 border text-center">
                <div class="row">
                    <h4>Map Operator</h4>
                    <div class="col-lg-3">
                        <ul>
                            {
                                cityArray.map((city) =>{
                                    return (<li>{city}</li>)
                                })
                            }
                        </ul>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="col-lg-3"></div>
                </div>
            </div>
        </section>
    );
};

export default MapOperator;