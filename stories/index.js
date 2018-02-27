import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  IPhoneX,
  IPhone8,
  IPad,
  IMac,
  MacbookPro,
  Pixel2
} from '../src/components'

import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'
import IPhone8Screenshot from './screenshots/iphone_8_screenshot.png'
import IPadScreenshot from './screenshots/ipad_air_2_screenshot.png'
import IMacScreenShot from './screenshots/imac_screenshot.png'
import MacbookProScreenShot from './screenshots/macbook_pro.png'
import Pixel2Screenshot from './screenshots/pixel_2_screenshot.png'

storiesOf('Devices', module)
  .add('iPhone X', () => (
    <IPhoneX>
      <img src={IPhoneXScreenshot} alt="iPhone x Screenshot" />
    </IPhoneX>
  ))
  .add('iPhone 8', () => (
    <IPhone8>
      <img src={IPhone8Screenshot} alt="iPhone 8 Screenshot" />
    </IPhone8>
  ))
  .add('iPad', () => (
    <IPad>
      <img src={IPadScreenshot} alt="iPad Screenshot" />
    </IPad>
  ))
  .add('iMac', () => (
    <IMac>
      <img src={IMacScreenShot} alt="iMac Screenshot" />
    </IMac>
  ))
  .add('Macbook Pro', () => (
    <MacbookPro>
      <img src={MacbookProScreenShot} alt="Macbook Pro Screenshot" />
    </MacbookPro>
  ))
  .add('Google Pixel 2', () => (
    <Pixel2>
      <img src={Pixel2Screenshot} alt="Google Pixel 2 Screenshot" />
    </Pixel2>
  ))
