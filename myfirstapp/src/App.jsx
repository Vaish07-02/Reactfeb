import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/homeclass";
import Aboutclass from "./Classcomponents/Aboutclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greeting from "./Greeting";
function App() {
  let name = "Vaishnavi";
  let age = 22;
  return(
    <>
    <h1>Hello Everyone</h1>
    <h3>Welcome to React</h3>
    <Home/>
    <Homeclass />
    <About/>
    <Aboutclass />
    <Contact/>
    <Contactclass/>
    <Greeting fn = {name} age = {age} favColor = "Crimson"/>
    </>
  )
}
export default App;  