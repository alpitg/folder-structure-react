import { Link } from "react-router-dom";
import "./user-list.scss";
import { ROUTE_URL } from "../../../auth/constants/routes.const";

const UserListApp = () => {

    const userList: any[] = [
        {
            id: "1",
            name: "Alpit -  Cras justo odio"
        },
        {
            id: "2",
            name: "Shubham"
        },
        {
            id: "3",
            name: "Sam - Dapibus ac facilisis in"
        },
        {
            id: "4",
            name: "Max"
        }
    ];

    return (
        <div className="user-list-app">

            <ul className=" justify-content list-group list-group-flush">
                {
                    userList.map((user: any) => {
                        return <li className="list-group-item" key={user.id}>
                            <div className="d-flex">
                                {user.name}
                                <div className="float-right">
                                    <Link to={ROUTE_URL.USERS + "/" + user.id} >
                                        <span className="icon">
                                            <i className="pi pi-fw pi-pencil"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div >
    );
}

export default UserListApp;