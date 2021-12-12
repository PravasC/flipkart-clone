import React from 'react';
import { Spinner } from 'react-bootstrap';

function Spiner() {
    return (
        <>
            <div className="HomePageLoadingSpinner">
                <Spinner animation="border" variant="success" className="HomeSpinner"/>
            </div> 
        </>
    )
}

export default Spiner
