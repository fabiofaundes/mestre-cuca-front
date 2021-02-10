import React from 'react'

import LabeledInput from "../LabeledInput/LabeledInput";
import ArmazemSelector from '../ArmazemSelector/ArmazemSelector'

export const ingredienteComponents = (
<>
    <LabeledInput
        label='Quantidade'
        name='quantity'
        id='txtQuantity'
    />

    <ArmazemSelector required includeBtn />

    <LabeledInput
        label='Data de Validade'
        name='bestBefore'
        id='txtBestBefore'
    />
</>
)