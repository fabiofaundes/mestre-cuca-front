import React, { Children, isValidElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from './Column'
import { colors } from '../../_helpers'

const StyledTable = styled.table`
  width: 100%;
  font-family: Roboto Slab;  

  thead {
    border-bottom: 2px solid ${colors.darkOrange};    
  }

  th, td {
    padding: 10px 20px;
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.grey};
  }
`

const Table = ({data, className, children, updateFn}) => {

  const columns = Children.toArray(children).filter(
    child => isValidElement(child) && child.type === Column
  )

  return (
    <StyledTable className={className}>
      <thead>
        <tr>
        {
          columns.map(col => 
            <th key={`headerFor${col.props.name}`}>{col.props.title}</th>
          )
        }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, i) => 
            <tr key={`item${i}`}>
              { columns.map(col => <td key={col.props.name + i}>{item[col.props.name]}</td>) }
            </tr>
          )
        }
      </tbody>
    </StyledTable>
  )
}

Table.Column = Column

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,  
  className: PropTypes.string
}

export default Table