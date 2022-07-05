import ListRestaurants from "./components/ListRestaurants";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RestaurantDetails from "./pages/RestarauntDetails";




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ListRestaurants/>}/>
                    <Route exact path="/restaurant/:id" element={<RestaurantDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
