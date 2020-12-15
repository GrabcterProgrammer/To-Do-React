import React from "react";

import "./appElem.css";

export default class Elem extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        const {data, onToggleActive, onDelete} = this.props;

        const elem = data.map(item => {

            const {id, title, active} = item;

            let clazz = "elem-block__item";
            if (active) clazz += " elem-block__item_active"

            if (typeof item === "object"){
                return (
                    <li key={id}
                        className={clazz}
                        title="Двойной клик удалить"
                        onClick={() => onToggleActive(id)}
                        onDoubleClick={() => onDelete(id)}>

                        {title}

                    </li>
                )
            }

        })


        return (
            <ul className="elem-block">

                {elem}

            </ul>
        )
    }
}