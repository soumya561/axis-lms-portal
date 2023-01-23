import React, { useState } from 'react';
import {Button } from 'react-bootstrap';

function UploadFile() {
        const [documentId, setDocumentId] = useState("");
        var singleFileUploadInput = document.querySelector('#file');
        var singleFileUploadStatus = document.querySelector('#status');
    
        function handleSubmit(event) {
            event.preventDefault();
            var files = singleFileUploadInput.files;
            if (files.length === 0) {
                singleFileUploadStatus.innerHTML = "Please select a file";
                singleFileUploadStatus.style.display = "block";
            }
            var formData = new FormData();
            formData.append("documentId", documentId);
            formData.append("file", files[0]);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8500/uploaddocument");
            xhr.onload = function () {
                console.log(xhr.responseText);

                if (xhr.status === 200) {
                    singleFileUploadStatus.innerHTML = `<p> uploaded successfully</p>`;
                    singleFileUploadStatus.style.display = "block";
                } else {
                    singleFileUploadStatus.innerHTML = "Some Error Occurred";
                    singleFileUploadStatus.style.display = "block";
                }
            }
            xhr.send(formData);
        }
        return (
            <div>
                <h4>Upload file</h4>
                <div>
                  
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input id='documentId' type='text' name='documentId' onChange={(e) => setDocumentId(e.target.value)} required/>
                            <br/>
                            <br/>
                            <input id="file" type="file" name="file" required />
                            <br/>
                            <br/>
                        <button type="submit">upload</button>
                            <br/>
                           
                        </form>
                        <div>
                            <div id="status"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default UploadFile;