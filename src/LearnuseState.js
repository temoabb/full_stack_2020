import React from 'react'





const Collections = () => {

  let result = notes.map(item => item.id)
  console.log("result", result)

  return (
    <div>
      <Data notes={notes} />
    </div>
  )
}



const Data = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(item =>
          <Note
            note={item}
            key={item.id} />
        )}
      </ul>
    </div>
  )
}






// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by presenting  the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const LearnuseState = () => {

//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAllClicks] = useState([])

//   const handleLeftClick = () => {
//     setAllClicks(allClicks.concat("L"))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAllClicks(allClicks.concat("R"))
//     setRight(right + 1)
//   }

//   // debugger

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="LEFT" />
//       <Button onClick={handleRightClick} text="RIGHT" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )

// }









//======================== Complex state ===========================================
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })
//   console.log("clicks", clicks)

//   const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

//   const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>LEFT</button>

//       <button onClick={handleRightClick}>RIGHT</button>
//       {clicks.right}

//     </div>
//   )
// }






// ========================= Component, state, event handlers  ===============================================

// const LearnuseState = () => {

//   const [counter, setCounter] = useState(0);
//   const increaseByOne = () => setCounter(counter + 1);
//   const setToZero = () => { setCounter(0) }
//   const decreaseByOne = () => setCounter(counter - 1)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button
//         handleClick={increaseByOne}
//         text="PLUS" />
//       <Button
//         handleClick={setToZero}
//         text="RESET" />
//       <Button
//         handleClick={decreaseByOne}
//         text="MINUS" />
//     </div>
//   )
// }

// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


export default Collections
