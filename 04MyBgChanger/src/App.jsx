import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "red"}}>Red</button>
          
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "green"}}>Green</button>
          
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "blue"}}>Blue</button>
          
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "orange"}}>Orange</button>
          
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "purple"}}>Purple</button>
          
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "black"}}>Black</button>
          
          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "cyan"}}>Cyan</button>
          
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "violet"}}>Violet</button>

          <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "maroon"}}>Maroon</button>

          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "grey"}}>Grey</button>

          <button onClick={() => setColor("gold")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "gold"}}>Gold</button>

          <button onClick={() => setColor("brown")} className="outline-none px-4 py-1.5 text-white font-semibold rounded-xl " style={{backgroundColor: "brown"}}>Brown</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
