import React from 'react';

const Entry = (props) => (
    <tr>
        <td>{props.person.name}</td>
        <td>{props.person.number}</td>
    </tr>
)

export default Entry