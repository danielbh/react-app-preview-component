import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  IPhoneX,
  IPhone8
} from '../src'

import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'
import IPhone8Screenshot from './screenshots/iphone_8_screenshot.png'

storiesOf('Devices', module)
  .add('IPhone X', () => (
    <IPhoneX>
      <img src={IPhoneXScreenshot} alt="iphone x screenshot" />
    </IPhoneX>
  ))
  .add('IPhone 8', () => (
    <IPhone8>
      <img src={IPhone8Screenshot} alt="iphone 8 screenshot" />
    </IPhone8>
  ))
