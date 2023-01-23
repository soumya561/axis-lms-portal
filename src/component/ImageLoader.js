import React, { useEffect, useState } from 'react';

function ImageLoader() {
    const [image, setImage] = useState(null);
    useEffect(() => {
        var xhreq = new XMLHttpRequest();
        xhreq.onreadystatechange = function () {
            if (xhreq.readyState === XMLHttpRequest.DONE) {
                var dataUrl = "data:image/jpeg;base64," + xhreq.response;
                setImage(dataUrl);
            }
        }
        xhreq.open("GET", "http://localhost:8500/view-document/9", true);
        xhreq.send(null);
    }, [image]);
    return (
        <div>
            <h1>View Photo</h1>
            <div>
              
                <img id="ItemPreview" src={image} alt='profile' width="200px"/>
            </div>
        </div>
    );
}

export default ImageLoader;