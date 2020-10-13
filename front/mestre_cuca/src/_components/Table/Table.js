import React, { Children, isValidElement, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from './Column'
import { colors } from '../../_helpers'

const StyledTable = styled.table`
  width: 100%;
  font-family: Roboto Slab;

  thead {
    border-bottom: 1px solid ${colors.darkOrange};
    border-right: 1px solid ${colors.darkOrange};
  }

  th {
    padding: 10px 20px;
  }
`

const Table = ({data, className, children}) => {

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
              <td>{ columns.map(col => item[col.props.name])}</td>
            </tr>  
          )
        }
      </tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,  
  className: PropTypes.string
}

export default Table