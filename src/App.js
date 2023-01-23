import ImageLoader from "./component/ImageLoader";
import Avatar from 'react-avatar';
import EmployeeList from "./component/EmployeeListPage";
import ContactPage from "./component/ContactPage";
import UploadFile from "./component/UploadFile";
import PdfLoader from "./component/PdfLoader";




function App() {
  return (
    <div className="App">
      
      
      <UploadFile/>
      <hr/>
  
      <PdfLoader/>
     <EmployeeList/>

       
    </div>
  );
}

export default App;
