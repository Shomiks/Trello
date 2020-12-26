import {FC, ReactNode} from "react";

interface RouteConfigItem {
    path: string;
    component: FC | ReactNode | any;
}

export default RouteConfigItem