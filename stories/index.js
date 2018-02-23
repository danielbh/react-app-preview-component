import React from 'react'
import { storiesOf } from '@storybook/react'
import { IPhoneX } from '../src'
import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'

storiesOf('Devices', module)
  .add('IPhone X', () => (
    <IPhoneX>
      <img src={IPhoneXScreenshot} alt="iphone x screenshot" />
    </IPhoneX>
  ))
