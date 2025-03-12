import UserCards from "./components/UserCards";
import img1 from "./assets/img/icons/1.webp"
import img2 from "./assets/img/icons/2.webp"
import img3 from "./assets/img/icons/3.webp"
import UseState from "./components/UseState";
import Card from "./components/PropsCard";
import Button from "./components/PropsButton";
import { useState } from "react";
import DataTravel from "./components/DataPassFromChildToParent";
import EventHandelling from "./components/EventHandelling";
import Hooks from "./components/Hooks";
import LoggerComponent from "./components/useEffect/OneLoggerComp";
import LoggerCompo from "./components/useEffect/OneLoggerComp";
import TimerComp from "./components/useEffect/TwoTimerComp";
import DataFetcher from "./components/useEffect/ThreeDataFetcher";
import ResizeComp from "./components/useEffect/FourResizeComp";
import MultiFunctionComp from "./components/useEffect/FiveMultiFunctionComponent.JSX";
import ChildA from "./components/Context/child/ChildA";
import UseContext from "./components/Context/UseContext";
import Xcontext from "./components/Xcontext/Xcontext";
import B from "./components/Xcontext/Xchild/B";
import Theme from "./components/Xcontext/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Router/Home";
import About from "./components/Router/About";
import Dashboard from "./components/Router/Dashboard";
import Navbar from "./components/Router/Navbar";
import ParamComp from "./components/Router/ParamComp";
import Courses from "./components/Router/NestedRouting/Courses";
import Mock from "./components/Router/NestedRouting/Mock";
import Reports from "./components/Router/NestedRouting/Reports";
import NotFound from "./components/Router/NotFound";


  ////////////////////Routing in react STart
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div className="text-center">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {
      path:"/about",
      element: <div className="text-center">
      <Navbar></Navbar>
      <About></About>
    </div>
    },
    {
      path:"/dashboard",
      element: <div className="text-center">
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>,
      children:[
        {
          path:"courses",
          element: <div className="">
            <Courses></Courses>
          </div>
        },
        {
          path:"mock-tests",
          element: <div className="">
            <Mock></Mock>
          </div>
        },
        {
          path:"reports",
          element: <div className="">
            <Reports></Reports>
          </div>
        }
      ]
    },
    {
      path:"student/:id",
      element:
      <div className="text-center">
        <Navbar></Navbar>
        <ParamComp></ParamComp>
      </div>
    },
    {
      path:"*",
      element: <div className="">
        <NotFound></NotFound>
      </div>
    }
  ]
);
////////////////////Routing in react End


function App(){
  const [Count, setCount] = useState(0);
  
  function handleClickEvent() {
    setCount(Count+1);
  }
  
  ////////////////////////
  const [headName, setHeadName] = useState("");


  ////////////////////Routing in react STart


  
  ////////////////////Routing in react End

    
  return(
    
    <>

      <div className="container text-center">
        <div className="row">
          <h1>GlaDowl</h1>
          <h6>Lorem ipsum, dolor sit amet consectetur adip</h6>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <h3 className="pb-3">01 : Components & Props</h3>
          <UserCards name = "Atishhhh" img={img1} discription ="lorem ipsum 1"></UserCards>
          <UserCards  name = "Nirya" img={img2}  discription ="lorem ipsum 2"></UserCards>
          <UserCards  name = "Manthyaa"  img={img3}  discription ="lorem ipsum 3"></UserCards>

        </div>
      </div>
      <UseState></UseState>
      <Card name="Atish Kamble...">
        <h6>Best Web Developer</h6>
        <span>Want to become Content Creator</span>
        <p>Will Become best Developer</p>

        <Button clickEventFromParent={handleClickEvent} text="Click Me To Increase Count">
          <h5>{Count}</h5>
        </Button>
      </Card>
      <DataTravel headName={headName} setHeadName={setHeadName}>
        <p>i am inside App/Parent Component value of name is : {headName}</p>
      </DataTravel>
      <EventHandelling></EventHandelling>
      <div className="container">
        <div className="row">
          <h1>Hooks in Detail</h1>
          <div className="col-lg-4 py-5 border">
            <LoggerCompo></LoggerCompo>
          </div>
          <div className="col-lg-4 py-5 border">
            <TimerComp></TimerComp>
          </div>
          <div className="col-lg-4 py-5 border">
            <DataFetcher></DataFetcher>
          </div>
          <div className="col-lg-4 py-5 border">
            <ResizeComp></ResizeComp>
          </div>
          <div className="col-lg-4 py-5 border">
            <MultiFunctionComp></MultiFunctionComp>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 border py-5">
              <UseContext></UseContext>
          </div>
          <div className="col-lg-4 border py-5">
              <Xcontext></Xcontext>
          </div>
          <div className="col-lg-4 border py-5">
            <Theme></Theme>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <h1>React Routing</h1>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </>
  )
}

export default App;