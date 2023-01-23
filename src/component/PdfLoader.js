import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';

function PdfLoader(props) {


    const [loadpdf, setLoadPdf] = useState(true);
    const [viewPDF, setViewPDF] = useState(false);
    const openPDF = () => setViewPDF(true);
    const [pdfdata, setPdfData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8500/view-document/38')
            .then((response) => {
                setPdfData(response.data);
                console.log(response.data);
                setLoadPdf(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    
    if (loadpdf) {
        return (
            <div>
                <Button variant='dark grey' onClick={openPDF}>viewPdf</Button>
            </div>
        )
    }
    return (
        
            <div>
            <div className='container'>  
                        <iframe
                            src={`data:application/pdf;base64,${pdfdata}#toolbar=1`} title="document" width='1000px' height='500rem'/>              
            </div>
           
        </div>
    
    );
}

export default PdfLoader;