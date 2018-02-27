import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  IPhoneX,
  IPhone8,
  IPad,
  IMac,
  MacbookPro
} from '../src'

import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'
import IPhone8Screenshot from './screenshots/iphone_8_screenshot.png'
import IPadScreenshot from './screenshots/ipad_air_2_screenshot.png'
import IMacScreenShot from './screenshots/imac_screenshot.png'
import MacbookProScreenShot from './screenshots/macbook_pro.png'

storiesOf('Devices', module)
  .add('iPhone X', () => (
    <IPhoneX>
      <img src={IPhoneXScreenshot} alt="iPhone x screenshot" />
    </IPhoneX>
  ))
  .add('iPhone 8', () => (
    <IPhone8>
      <img src={IPhone8Screenshot} alt="iPhone 8 screenshot" />
    </IPhone8>
  ))
  .add('iPad', () => (
    <IPad>
      <img src={IPadScreenshot} alt="iPad screenshot" />
    </IPad>
  ))
  .add('iMac', () => (
    <IMac>
      <img src={IMacScreenShot} alt="iMac screenshot" />
    </IMac>
  ))
  .add('Macbook Pro', () => (
    <MacbookPro>
      <img src={MacbookProScreenShot} alt="iMac screenshot" />
    </MacbookPro>
  ))
