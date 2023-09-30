export interface IRoutes {
  label: string;
  path: string;
  icon: string;
  claims: string[];
  route?: IRoutes[];
}
