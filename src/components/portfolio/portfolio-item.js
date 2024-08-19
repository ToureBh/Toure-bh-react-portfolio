import React from "react";


export default function (props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props. url}</h4>
        </div>
    )
}

//ESTO ES UN FUNCTIONAL COMPONENT, NO TIENE TANTOS USOS COMO LOS CLASS BASED COMPONENTS

//SI QUEREMOS USAR STATE O Lifecyrcle hooks, debemos usar class compoments, si solo queremos renderizar algún contenido, podemos usar funcional components