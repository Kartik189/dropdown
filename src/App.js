import './App.css';
import DropDown from './components/dropdown';

function App() {

  const colourVariants = [
    {
      id: 0,
      colour: 'black',
    },
    {
      id: 1,
      colour: 'brown'
    },
    {
      id: 2,
      colour: 'red'
    },
    {
      id: 3,
      colour: 'purple'
    },    
    {
      id: 4,
      colour: 'pink'
    }
  ]

  return (
    <div>
      <DropDown data={colourVariants}/>
    </div>
  );
}

export default App;
