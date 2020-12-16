import React from "react";

// Import block
import AddPanel from "../add-panel/addPanel";
import Elem from  "../app-elem/elem";

// Import styles
import "./app.css";



// Main class
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        // Checking the availability of data in local storage
        // if not, then add
        if (!localStorage.getItem("To-Do")){
            const data = [
                {id: this._genId(), title: "Вынести мусор", active: false},
                {id: this._genId(), title: "Помыть посуду", active: false},
                {id: this._genId(), title: "Сделать домашнее задание", active: false}
            ]

            this.state["data"] = data;

            localStorage.setItem("To-Do", JSON.stringify(this.state.data));
        }

        // Else read data from local storage
        else {
            this.state["data"] = JSON.parse(localStorage.getItem("To-Do"));
        }

        // Binding function interaction with state
        this.onToggleActive = this.onToggleActive.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addData = this.addData.bind(this);

    }

    // function generate random id for writing data
    _genId(){
        const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&".split("");
        let id = '';

        for(let i = 0; i <= 5; i++){
            id += symbols[(Math.random() * symbols.length).toFixed()];
        }

        return id
    }

    // Anonymous function toggle items
    _toggleItems(id, param){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, [param]: !old[param]};

            return {data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]}
        })
    }

    // Function adding data on states
    addData(text){

        if(text.replace("/\s/g").trim() === ''){
            text = "None";
        }

        const newData = {
            id: this._genId(),
            title: text,
            active: false
        }

        this.setState(({data}) => {
            return {data: [...data, newData]}
        })


    }

    // Function toggle active elements in to-do list
    onToggleActive(id){
        return this._toggleItems(id, "active")
    }

    // function delete data from local storage and app
    onDelete(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }

        })
    }


    render() {

        const {data} = this.state;

        localStorage.setItem("To-Do", JSON.stringify(data)); // Get data from local storage

        return (

            <div className="app-toDo">

                <header className="header">
                    To-Do List
                </header>

                <AddPanel
                    data={data}
                    onAddData={this.addData}
                />

                <Elem
                    data={data}
                    onToggleActive={this.onToggleActive}
                    onDelete={this.onDelete}
                />

            </div>

        )
    }

}