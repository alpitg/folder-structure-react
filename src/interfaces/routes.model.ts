export interface IRoutes {
    label: string;
    path: string;
    icon: JSX.Element | string;
    route?: IRoutes[]
}