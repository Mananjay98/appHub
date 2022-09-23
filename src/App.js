import React,{useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';
import { View } from './components/View';
import './components/view.css'

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('applications');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
//home section
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <p>Welcome to</p>
        <h1>Application Hub</h1>
      </section>
    </>
  );
};
//about section
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>ApplicationHub About Page</h1>
      </section>
    </>
  );
};

//Application section
export const Applica = () => {

  // main array of objects state || Applications state || Aplicationo array of objects.
  const [applications, setapps]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [type, setType]=useState('');

  // form submit event
  const handleAddAppSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let application={
      name,
      type
    }
    setapps([...applications,application]);
    setName('');
    setType('');
  }

  // delete app from table
  const deleteApp=(name)=>{
    const filteredApps=applications.filter((element,index)=>{
      return element.name !== name
    })
    setapps(filteredApps);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('applications',JSON.stringify(applications));
  },[applications])

  return (
    <>
    <Navbar/>
    <section className='wrapper'>
      <div className='main'>
        <div className='formcontainer'>
          <h2>Add New Application</h2>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddAppSubmit}>
            <label>Application Name</label><br></br>
            <input type="text" placeholder="Enter App's Name"className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Application Type</label><br></br>
            <input type="text" placeholder="Enter App's Type" className='form-control' required
            onChange={(e)=>setType(e.target.value)} value={type}></input>
            <br></br>
            <br></br>
            <button type="submit" className='sbtn'>
              ADD
            </button>
          </form>
        </div>

        <div className='viewcontainer'>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Apps Name</th>
                    <th>Apps Type</th>
                    <th align="center" colspan="2">Activity</th>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td>Social Media</td>
                    <td><button className='ibtn'>Install</button></td>
                    <td><button className='dbtn'>Delete</button></td>
                  </tr>
                  <tr>
                    <td>Google Chrome</td>
                    <td>Internet Browser</td>
                    <td><button className='ibtn'>Install</button></td>
                    <td><button className='dbtn'>Delete</button></td>
                  </tr>
                </thead>
                <tbody>
                  <View applications={applications} deleteApp={deleteApp}/>
                </tbody>
              </table>
            </div>
        </div>

      </div>
    </section>
    </>
  );
};

/*contact section*/
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <h1>ApplicationHub Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/applica">
        <Applica />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
