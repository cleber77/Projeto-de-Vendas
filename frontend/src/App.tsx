import Footer from "components/Footer";
import Navbar from"components/Navbar";
import DataTable from "components/DataTable";
import BarChart   from "components/BarChart";
function App() {
        return (
          <>
                    <Navbar/>
                  <div className ="container" > 
                   <h1 className= "text-primary py -3">Dashbord de venda</h1>
                  
                   <div className=" row px-3">
                     <div className= "col-sm-6">          
                       <h5 className="tex-center tex-secondary">taxa de sucesso (%)</h5>
                      <BarChart/>
                    </div>
                    
                     <div className= "col-sm-6">          
                       <h5    className="tex-center tex-secondary">taxa de sucesso (%)</h5>
                      <BarChart/>
          
                       </div>
                     </div>


          <DataTable/>
          </div>
        <Footer/>  
    </>
  );
}

export default App;
