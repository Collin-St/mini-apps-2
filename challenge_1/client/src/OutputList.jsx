import React from 'react';

const OutputList = ({ output }) => (
  <div className='content-outer'>
    <ul>
      {output.map(item => (
        <span className='content-inner'>
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

export default OutputList;