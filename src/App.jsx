import {BrowserRouter} from 'react-router-dom';
import AppWeather from './components/appWeather';


export default function App() {

  return (
    <>
      {/* we must wrap components that work with the useSearchParams in browserRouter */}
      <BrowserRouter>
        <AppWeather/>
      </BrowserRouter>
    </>
  )
}
