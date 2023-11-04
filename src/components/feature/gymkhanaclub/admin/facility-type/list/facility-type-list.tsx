import "./facility-type-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_TYPE_SUB_TITLE, FACILITY_TYPE_TITLE } from "../../facility.const";
import { Card } from "primereact/card";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { useEffect } from "react";
import { fetchRolesRequest, resetDeleteRole } from "../../../../../administration/store/actions/role.action";
import MessagesApp from "../../../../../ui/messages/messages";
import { LOADING } from "../../../../../../constants/global-contants/global-key.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";

const FacilityTypeListApp = () => {
    const roles = useSelector((x: AppState) => x.administration.roles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRolesRequest());
    }, []);

    const closeError = () => {
        dispatch(resetDeleteRole());
    };

    return (
        <div className="facility-type-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TYPE_TITLE}
                        subTitle={FACILITY_TYPE_SUB_TITLE}
                        children={
                            <>
                                Coming Next..
                            </>
                        }
                    />
                </div>
            </div>

            {
                roles?.list?.result?.length ? <NoRecordApp /> :

                    <Card title={FACILITY_TYPE_TITLE}>
                        {roles?.delete?.error &&
                            roles?.delete?.error?.map((error: string) => (
                                <MessagesApp
                                    type="alert-danger"
                                    message={error}
                                    close={closeError}
                                    key={error}
                                />
                            ))}
                        {roles?.list.pending && LOADING}
                        <div className="table-responsive">
                            <table className="table">
                                {/* <tbody>
                            {roles?.list?.result?.map((role: IRoleModel) => {
                                return <RoleItemApp role={role} key={role.id} />;
                            })}
                        </tbody> */}
                            </table>
                        </div>
                    </Card>
            }

        </div>
    )
}

export default FacilityTypeListApp;