import {useState} from 'react';
import './App.css';
import FilterComponent from './components/Filter.tsx';
import MapComponent from './components/Map.tsx';
import {MapProvider} from "./providers/MapProvider.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <MapProvider>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Ramer Douglas Peucker Algorithm</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="four columns">
                        <FilterComponent />
                    </div>
                    <div className="eight columns">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </MapProvider>
    );
}

export default App;
