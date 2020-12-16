import React from "react";

import "./addPanel.css";

export default class AddPanel extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }

        this.onGetValue = this.onGetValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onGetValue(e){

        if ((e.target.value).length > 0){
            this.setState({text: e.target.value})
        }

    }

    onSubmit(e){
        e.preventDefault();

        this.props.onAddData(this.state.text);
        this.setState({text: ""});
    }

    render() {

        const {data} = this.props;

        const dataActive = data.filter(item => item.active).length;

        return (
            <div className="add-panel">
                <form className="add-panel__form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="add-panel__input"
                        placeholder="Купить хлеб"
                        onChange={this.onGetValue}
                        value={this.state.text}/>

                    <button type="submit" className="btn add-panel__btn">+</button>
                </form>
                <div className="add-panel__info">
                    Записей {data.length} / Выполнено {dataActive}
                </div>
            </div>
        )

    }

}