import {
    BrowserRouter as Router,
    Route,
    Routes
  
  } from "react-router-dom"; // <--npm install react-router-dom
  
  import HomePage from "./Screens/HomePage"; // <-- this is our homescreen
  import PastLaunchersPage from "./Screens/PastLaunchesPage"; // <and this is another screen
  
  
  function App() {
    return (

    //  So you need to wrap your components inside the <Router> tag
     
      <Router>
         <h2>Header</h2>
      <div className="text-3xl font-bold underline">


        <Routes>    {/* Then you need to go ahead and wrap all your screens with the <Routes> tag */}
          <Route path='/'  element={<HomePage/>}/> {/* And then you going to use the <Route/> tag for each of your routes and then you can assign the path and screen using the path and element path and attribute elements  */}
          <Route exact path='/past-launches'  element={<PastLaunchersPage/>}/>
        </Routes>


      </div>
      </Router>
    );
  }
  
  export default App;
  