import React from "react";

const Display = (props) => {
    return(
        <section className="display">            
            <div>
                <h1>{ props.value }</h1>    
            </div>
        </section>
    )
}

export default Display;
