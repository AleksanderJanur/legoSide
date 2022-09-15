import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {getMinifigs} from "./features/minifigs/minifigsSlice";
import {getHarryPotterMinifigs} from "./features/minifigs/minifigsSlice";
function App() {
    const dispatch = useAppDispatch();
    const minifigs = useAppSelector(getMinifigs);
    useEffect(() => {
        dispatch(getHarryPotterMinifigs())
    }, [])

    return minifigs ? (
        <div className="App">
            {minifigs.map((item: any) => (
                <div style={{color:"blue"}} key={item.set_num}>{item.name}</div>
            ))}
        </div>
    ) : null
};

export default App;
