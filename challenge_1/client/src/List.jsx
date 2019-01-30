import React from 'react';

const List = ({ data }) => (
  <div className='content-outer'>
    <ul>
      {data.map((item, i) => (
        <span className='content-inner' key={i}>
          <br />
          <li>
            <i>{(item.date[0] === '-') ? item.date.slice(1) + ' BCE ' : item.date + ' ACE '}</i>
            <br />
            {item.description}
          </li>
          <br />
        </span>
        ))}
    </ul>
  </div>
)

export default List;