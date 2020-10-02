import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTable = styled.table`

`

const Table = ({data, columnNames, className}) => {  

  return (
    <StyledTable className={className}>
      <thead>
        <tr>
          {
            columnNames.map((item, i) => <th key={`header${i}`}>{item}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, i) =>
            <tr key={`object${i}`}>
              {
                Object.keys(item).map(key => <td key={`object${key}${i}`}>{item[key]}</td>)
              }
            </tr>
          )
        }
      </tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
}

export default Table