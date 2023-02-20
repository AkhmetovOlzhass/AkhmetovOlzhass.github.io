import { Component } from 'react';
import './bootstrap-grid.min.css';
import Home from '../pages/home';
import OurCoffee from '../pages/our-coffee';
import Plessure from '../pages/plessure';
import OurCoffeeBlock from '../pages/our-coffee-block';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './app.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffeeBlockData: [
                {title: "BBBBB", country: "Columbia", price: "6.99$"},
                {title: "Aaaaaaaa", country: "Brazil", price: "7.99$"},
                {title: "LLLLLLL", country: "Kenya", price: "8.99$"},
                {title: "AROMISTICO Coffee 4 kg", country: "Brazil", price: "9.99$"},
                {title: "AROMISTICO Coffee 5 kg", country: "Columbia", price: "10.99$"},
                {title: "AROMISTICO Coffee 0.4 kg", country: "Kenya", price: "4.99$"}
            ],
            term: "",
            filter: "All"
        };
      }

    searchEmp = (items, term) => {
    if(term.length == 0){
        return items;
    }
    return items.filter(item => {
        return item.title.indexOf(term)>-1
    })
    }

    onUpdateSearch = (term) => {
    this.setState({term});
    }

    filterPost =(items, filter) => {
        switch (filter){
            case "Brazil":
                return items.filter(item => item.country == "Brazil");
            case "Kenya":
                return items.filter(item => item.country == "Kenya");
            case "Columbia":
                return items.filter(item => item.country == "Columbia");
          default:
            return items;
        }
    }
  
    onFilter  = (filter) => {
    this.setState({filter})
    }
    
      render() {
        const {coffeeBlockData, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(coffeeBlockData, term), filter);
        return (
            <Router>
                <Routes>
                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/our-coffee' element={<OurCoffee filter = {filter} onFilter = {this.onFilter} onUpdateSearch = {this.onUpdateSearch}  coffeeBlockData = {visibleData}/>} />
                    <Route path='/plessure' element={<Plessure coffeeBlockData = {coffeeBlockData}/>} />
                    <Route path='/our-coffee-block' element={<OurCoffeeBlock/>} />
                </Routes>
            </Router>
        );
      }
};
export default App;