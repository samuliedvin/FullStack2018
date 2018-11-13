import React from 'react'
const Filter = ({filter, handleFilterChange}) => (
    <div>
        rajaa näytettäviä: <input value = {filter} onChange = {(e) => handleFilterChange(e) }/>
    </div>
)

export default Filter