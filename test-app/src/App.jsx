import { Card } from 'react-flip-card'
import "react-flip-card/index.css"
import FrontDiv from "./Cards/FrontDiv";
import BackDiv from "./Cards/BackDiv";
function App() {

  return (
    <>
      <Card frontCard={<FrontDiv />} backCard={<BackDiv />} animationType='slide' slideDirection='down' className='card' />
    </>
  )
}

export default App
