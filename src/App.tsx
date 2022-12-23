import axios from "axios";

// import Counter from "./components/Counter";
// import Users from "./components/Users";
// import Popup from "./components/Popup";
// import Magic from "./components/Magic";
// import Mantan from "./components/Mantan";
import Bank from "./components/Bank";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* <Popup /> */}
      {/* <Magic /> */}
      {/* <Mantan /> */}
      <Bank />
    </>
  );
};

export default App;
