import {
    Switch,
    Route
} from "react-router-dom";

import { AdvertForm } from "./../features/advertForm/AdvertForm";
import { Home } from "./../features/home/Home";

export const AppRoutes  = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/advertisement/create" exact component={AdvertForm} />
       </Switch>
    );
}