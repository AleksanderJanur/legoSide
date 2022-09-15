import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import PagesStyle from "./pagesStyle";
import { store } from './app/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import reportWebVitals from "./reportWebVitals";
import {MainPage} from "./pages/MainPage";
import {ChooseMinifig} from "./pages/ChooseMinifig";
import { PaymentPage } from './pages/PaymentPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
        <Provider store={store}>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/minifigs" element={<ChooseMinifig />} />
            <Route path="/details" element={<PaymentPage />} />
        </Routes>
        <PagesStyle />
        </Provider>
    </BrowserRouter>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
