import React from 'react'
import { LeftJoyconIcon, RightJoyconIcon } from './Icons'
import Sticky from 'react-stickynode'
import enhance from './Joycons.enhancer'

const Joycons = ({ classes, leftJoyconColor, rightJoyconColor, ...rest }) => (
  <div>
    <Sticky>
      <LeftJoyconIcon color={leftJoyconColor} {...rest} />
      <RightJoyconIcon color={rightJoyconColor} {...rest} />
    </Sticky>
  </div>
)

export default enhance(Joycons)
