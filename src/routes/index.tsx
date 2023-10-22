import { Button } from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useAppContext } from '../shared/context/themeContext';


export const AppRoutes = () => {

    const {toggleTheme} = useAppContext();

    return(
        <Routes>
            <Route path='/home' element={<Button variant='contained' color='primary' onClick={toggleTheme}>Página inicial</Button>} />
            <Route path='*' element={<Navigate to={'/home'}/>} />
        </Routes>
    )

}