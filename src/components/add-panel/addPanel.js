import React from "react";

import "./addPanel.css";

export default class AddPanel extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="add-panel">
                <form className="add-panel__form">
                    <input type="text" className="add-panel__input" placeholder="Купить хлеб"/>
                    <button type="submit" className="btn add-panel__btn">+</button>
                </form>
                <div className="add-panel__info">
                    Записей 0 / Выполнено 0
                </div>
            </div>
        )
    }

}