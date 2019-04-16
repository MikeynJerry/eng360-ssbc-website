import React from 'react'
import { LeftJoyconIcon, RightJoyconIcon } from './Icons'
import Sticky from 'react-stickynode'

const Joycons = ({ classes, leftJoyconColor, rightJoyconColor, ...rest }) => (
  <div>
    <Sticky>
      <LeftJoyconIcon color={leftJoyconColor} {...rest} />
      <RightJoyconIcon color={rightJoyconColor} {...rest} />
    </Sticky>
  </div>
)

export default Joycons
