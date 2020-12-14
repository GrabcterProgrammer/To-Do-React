import React from "react";

import "./appElem.css";

export default class Elem extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ul className="elem-block">

                <li className="elem-block__item elem-block__item_active" title="Двойной клик удалить">Вынести мусор</li>
                <li className="elem-block__item">Помыть посуду</li>
                <li className="elem-block__item">Сделать домашнее задание</li>

            </ul>
        )
    }
}