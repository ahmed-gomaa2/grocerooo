import React, {useEffect} from 'react';
import './App.css';
import Signup from "./components/Signup";
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Profile from "./components/Profile";
import {connect} from 'react-redux'
import * as actions from './actions'
import Sidebar from './components/Sidebar';
import Vegetables from './components/storeComponents/Vegetables'
import List from './components/List'
import ListItems from './components/storeComponents/ListItems'
import Fruits from './components/storeComponents/Fruits'
import CreateVegetable from './components/CreateVegetable';

function App(props) {

  const [open, setOpen] = React.useState(false)
  const [list, setList] = React.useState(false)

  const openMenu = () => {
    setOpen(!open)
  }

  const openList = () => {
    setList(!list)
  }

  useEffect(() => {
    props.gettingUserLists()
  }, [props.user])

  useEffect(() => {
    props.gettingVegetables()
  }, [])

  return (
    <div className="app">
      <BrowserRouter style={{display: 'flex'}}>
          <Route exact component={() => <List listOpen={list} openList={openList} />}/>
          <Route exact component={() => <Header open={openMenu} />} />
          <Route exact component={() => <Sidebar open={open}  openMenu={openMenu}/>} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/register'} component={() => <Signup />} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path='/vegetables' component={() => <Vegetables listOpen={list} openList={openList} />} />
          <Route exact path='/fruits' component={() => <Fruits listOpen={list} openList={openList} />} />
          <Route exact path='/list/items' component={() => <ListItems />} />
          <Route exact path='/create/vegetable' component={()=> <CreateVegetable />} />
          {
            props.user?.username && <Route exact path={'/profile'} component={Profile}/>
          }
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    vegetables: state.vegetables
  }
}

export default connect(mapStateToProps, actions) (App);
