import { Outlet } from "react-router";
import "./orm.scss"

const OrmApp = () => {

    return <>
        <div className="orm-app container wrapper">
            <Outlet />
        </div>
    </>
}

export default OrmApp;