import React from "react";

// Import block
import AddPanel from "../add-panel/addPanel";
import Elem from  "../app-elem/elem";

// Import styles
import "./app.css";
import elem from "../app-elem/elem";



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        if (!localStorage.getItem("To-Do")){
            const data = [
                {id: this._genId(), title: "Вынести мусор", active: false},
                {id: this._genId(), title: "Помыть посуду", active: false},
                {id: this._genId(), title: "Сделать домашнее задание", active: false}
            ]

            this.state["data"] = data;

            localStorage.setItem("To-Do", JSON.stringify(this.state.data));
        }

        else {
            this.state["data"] = JSON.parse(localStorage.getItem("To-Do"));
        }

        this.onToggleActive = this.onToggleActive.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }

    _genId(){
        const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&".split("");
        let id = '';

        for(let i = 0; i <= 5; i++){
            id += symbols[(Math.random() * symbols.length).toFixed()];
        }

        return id
    }

    _toggleItems(id, param){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, [param]: !old[param]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {data: newArr}
        })
    }

    onToggleActive(id){
        return this._toggleItems(id, "active")
    }

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

        localStorage.setItem("To-Do", JSON.stringify(data));

        return (

            <div className="app-toDo">

                <header className="header">
                    To-Do List
                </header>

                <AddPanel
                    data={data}
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