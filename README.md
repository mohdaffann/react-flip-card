

# @mohammedaffan/react-flip-card

A reusable react hover card component with multiple flip and animation styles (flip , fade and slide).

works with react>=16.8.0

Flip animation with duration of transition and flip type i.e horizontal or vertical control.

Fade animation with duration of fade upon hover in seconds.

Slide animation with slide duration control in seconds , and also type of slide for backCacd i.e Up , Down , leftToRight and rightToLeft.

## Installation

Install via  npm

```bash
  npm i @mohammedaffan/react-flip-card
```
## Demo

https://react-flip-card-demo-gweo.vercel.app/
    
## Usage

NOTE : Do not forget to have the Card dimentions i.e width and height , the same as Front and Back card , so that animations work smoothly.

```javascript
import { Card } from '@mohammedaffan/react-flip-card'
import "@mohammedaffan/react-flip-card/index.css"
import FrontDiv from "./Cards/FrontDiv";//This is a div
import BackDiv from "./Cards/BackDiv";//This is a div
function App() {

  return (
    <>
      <Card frontCard={<FrontDiv />}
      backCard={<BackDiv />} 
      animationType='slide'
      slideDirection='down'
       />
    </>
  )
}

export default App
```



## API Reference


| Prop           | Type                                          | Default       | Description                                                               |
|----------------|-----------------------------------------------|---------------|---------------------------------------------------------------------------|
| `animationType`  | flip , fade , slide                     | "flip"        | Animation type for the card transition                                    |
| `flipDirection`  | horizontal , vertical                     | "horizontal"  | Direction of flip animation (only applies when animationType is "flip")   |
| `flipDuration`   | number                                        | 0.5           | Duration of flip animation in seconds                                     |
| `fadeDuration`   | number                                        | 0.5           | Duration of fade animation in seconds                                     |
| `slideDuration`  | number                                        | 0.5           | Duration of slide animation in seconds                                    |
| `slideDirection` | up , down ,  leftToRight , rightToLeft | "leftToRight" | Direction of slide animation (only applies when animationType is "slide") |
| `frontCard`      | React.ReactNode                               | -             | `Required`. Content to display on the front of the card                     |
| `backCard`       | React.ReactNode                               | -             | `Required`. Content to display on the back of the card                      |
| `className`      | string                                        | ""            | Additional CSS classes to apply to the card container                     |


## Run Locally

Clone the project

```bash
  git clone https://github.com/mohdaffann/react-flip-card.git
```

Go to the project directory

```bash
  cd test-app
```

Install deps
```bash
  npm install
```
Run the app
```bash
  npm run dev
```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mohammedaffan-sable.vercel.app/
)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-affan-anass/)
[![GMAIL](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muhammadaffanpvt@gmail.com
)

