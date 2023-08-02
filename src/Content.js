import ItemList from "./ItemList";


const Content = ({items,handleCheck,handleDelete}) => {
  
  return (
    <>
        {items.length ? (
        <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        ) : (
            <p style={{ marginTop: "2px" }}>Your list is empty.</p>
        )}
    </>
  )

  
}

export default Content;



// useStateHooks-react

// const [name,setName]=useState('User');
//   const [count,setCount] = useState(0);

//     const handleBar = () => {
//         const names = ["sai", "Ajay" , "Sindhu","Shivani"];
//         const value = Math.floor(Math.random()*4);
//         setName(names[value])
//     }

//     const handleBar1 = () => {
//       setCount(count+1);
//       setCount(count+2);
//       console.log(count);
//     }

//       const handleBar2 = () => {
//         console.log(count);
//       }

//   return (
//     <main>
//         <p>Hello {name} </p>
//         <button onClick={handleBar}>Tap to change Name</button>
//         <button onClick={handleBar1}>increment in console</button>
//         <button onClick={handleBar2}>click it</button>
//     </main>
//   )
