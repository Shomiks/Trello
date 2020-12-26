import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import RouteConfigItem from "./interfaces";

export const RenderRoutes: FC<RouteConfigItem[]> = (config) =>
{
    console.log(config)
    return (
        <Switch>
            {config.map(({path, component}: RouteConfigItem) => (
                <Route key={path} path={path} component={component}/>
            ))}
        </Switch>
    );
};

export default RenderRoutes;
