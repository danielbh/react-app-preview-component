# react-app-preview-component

React component to display app previews beautifully with Desktop and Mobile screenshots. Each screenshot can be framed by a specific device. Below is a list of devices with the best widths and heights of screenshots for each device.

#### Recommended Sizes for Screenshots
| Device         | Width | Height  | Aspect Ratio
| ---------------|-------| --------| --------------|
| iPhone X       | 242   | 524     | 0.46          |
| iPhone 8       | 238   | 423     | 0.56          |
| iPad           | 418   | 559     | 0.75          |
| Macbook Pro    | 625   | 390     | 1.6           |
| iMac           | 737   | 415     | 1.78          |
| Google Pixel 2 | 255   | 452     | .56           |

See the `./storybook` for implementation examples

#### Default Implementation

```jsx
import { IPhoneX } from 'react-app-preview-component'
import IPhoneXScreenshot from './screenshots/iphone_x_screenshot.png'

<IPhoneX>
  <img src={IPhoneXScreenshot} alt="iPhone X Screenshot" />
</IPhoneX>
```

#### With a Carousel

##### Props

<table>
<tbody>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
<tr>
  <td>carousel</td>
  <td>boolean</td>
  <td>false</td>
  <td>Toggle if images can rotate.</td>
</tr>
<tr>
  <td>changeOnClick</td>
  <td>boolean</td>
  <td>true</td>
  <td>Only change screenshot slide on click. By default <br> carousel will slide automatically on interval.</td>
</tr>
<tr>
  <td>interval</td>
  <td>float</td>
  <td>2000</td>
  <td>Toggle if images can rotate.</td>
</tr>
</tbody>
</table>

```jsx
import { IPhoneX } from 'react-app-preview-component'
import IPhoneXScreenshot1 from './screenshots/iphone_x_screenshot1.png'
import IPhoneXScreenshot2 from './screenshots/iphone_x_screenshot2.png'
import IPhoneXScreenshot3 from './screenshots/iphone_x_screenshot3.png'

<IPhoneX carousel changeOnClick interval={3000}>
  <img src={IPhoneXScreenshot} alt="iPhone X Screenshot1" />
  <img src={IPhoneXScreenshot2} alt="iPhone X Screenshot2" />
  <img src={IPhoneXScreenshot3} alt="iPhone X Screenshot3" />
</IPhoneX>
```

### Please help me make this library better by submitting issues or pull requests

Device assets courtesy of [Facebook Design](https://facebook.design/devices)
