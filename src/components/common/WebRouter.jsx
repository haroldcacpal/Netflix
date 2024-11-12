import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header";

const WebRouter = ({header, routes}) => {
    return (
        <>
            <BrowserRouter>
                {
                    header != null ? header : null
                }
                <Routes>
                    {
                        routes.map(route => (
                            <Route path={route.path} element={route.element} />
                        ))
                    }
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default WebRouter