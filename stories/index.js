import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  IPhoneX,
  IPhone8,
  IPad
} from '../src'

import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'
import IPhone8Screenshot from './screenshots/iphone_8_screenshot.png'
import IPadScreenshot from './screenshots/ipad_air_2_screenshot.png'

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
  .add('IPad', () => (
    <IPad>
      <img src={IPadScreenshot} alt="ipad screenshot" />
    </IPad>
  ))
