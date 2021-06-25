import DropDown from './components/dropdown';
import black from './assets/colours/black.webp';
import grey from './assets/colours/grey.webp';
import lightblue from './assets/colours/lightblue.webp';
import white from './assets/colours/white.webp';

function App() {

  const colourVariants = [
    {
      id: 1,
      colour: 'black',
      url: black
    },
    {
      id: 2,
      colour: 'grey',
      url: grey
    },
    {
      id: 3,
      colour: 'light blue',
      url: lightblue
    },
    {
      id: 4,
      colour: 'white',
      url: white
    }
  ]

  return (
    <div>
      <DropDown data={colourVariants} />
    </div>
  );
}

export default App;
