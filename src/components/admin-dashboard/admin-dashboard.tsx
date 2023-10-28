import { Card } from "primereact/card";
import DoughnutChartApp from "../chart/dough-chart/dough-chart";
import "./admin-dashboard.scss";

const AdminDashboardApp = () => {
    return <>
        <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
                <Card title="Transaction History">

                    <DoughnutChartApp />

                    <div className="row">
                        <div className="col-md-12">
                            <div className="mt-3 d-flex">
                                <div className="text-md-center">
                                    <h6 className="mb-1">Tranfer to Stripe</h6>
                                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                </div>
                                <div className="align-self-center">
                                    <h6 className="font-weight-bold mb-0">$593</h6>
                                </div>
                            </div>
                        </div>
                    </div>



                </Card>
            </div>

            <br />


        </div>

        <div className="row">
            <div className="col-sm-12">

            </div>
        </div>

        <br />

    </>
}

export default AdminDashboardApp;