import { useParams } from "react-router";

const UserDetailApp = () => {

    const { id } = useParams();

    return (
        <>
            Hi From UserDetailApp {id}
        </>
    );
}

export default UserDetailApp;