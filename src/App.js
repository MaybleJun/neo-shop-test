import React, {useContext}  from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";


const App = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
});

export default App;