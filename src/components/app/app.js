import React from "react";

// Import block
import AddPanel from "../add-panel/addPanel";
import Elem from  "../app-elem/elem";

// Import styles
import "./app.css";



export default class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="app-toDo">

                <header className="header">
                    To-Do List
                </header>

                <AddPanel />
                <Elem />

            </div>

        )
    }

}