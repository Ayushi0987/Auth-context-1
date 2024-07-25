import { useState } from "react"
import imgSrc from './style.css/image.jpg'

export default function App() {
    const [height, setHeight] = useState(320);
    const [width, setWidth] = useState(320);
    
  return (
    <div id="main">
        <label>Height Slider</label>
            <input type= {'range'}
            min="100"
            max="800"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
            id="height-slider"
            />
        <label>Width Slider</label>
            <input type= {'range'}
            min="100"
            max="800"
            value={width}
            onChange={(e)=>setWidth(e.target.value)}
            id="width-slider"
            />
        {
            <img src="https://shorturl.at/dkBCO"  style={
                {
                    height: `${height}px`,
                    width: `${width}px`
                }}
                id="resizable-img"
            />
        }
      
    </div>
  )
}
