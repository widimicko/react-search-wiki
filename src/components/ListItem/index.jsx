import React from 'react'

function ListItem({ id, label }) {
  return (
    <div className='py-1 px-1 border-b-2 border-gray-400'>
      <a href={id} target="_blank" rel="noreferrer" className='text-lg text-blue-400'>
        {label}
      </a>
      <p className='text-sm'>{id}</p>
    </div>
  )
}

export default ListItem
