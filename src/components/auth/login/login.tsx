import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { ROUTE_URL } from '../constants/routes.const';
import { authenticateRequest } from '../../../store/actions/auth.action';
import { IAuthenticationRequestModel } from '../../../interfaces/auth.model';

import "./login.scss";

const LoginApp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [useLoginDetail, setUseLoginDetail] = useState<IAuthenticationRequestModel>({ userId: "", password: "" });

    const onLogin = () => {

        // navigate(ROUTE_URL.DASHBOARD);
        dispatch(authenticateRequest(useLoginDetail));

    }

    const Header = () => (
        <>
            <div className="">
                <p className="h1">Tsubaki India</p>
                <h1 className="display-5">Welcome back</h1>

                <blockquote className="blockquote">
                    <p>Sign-in to continue to <i>Tsubaki inventory</i> </p>
                </blockquote>
            </div>
        </>
    );
    const Footer = () => (
        <div className="flex flex-wrap justify-content-end gap-2">
            @ Please connect with CornPlex Pvt Ltd to report any issue.
        </div>
    );


    return (
        <div className="login-app container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="image-bg">
                        <div className="image-bg-content">
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <Card className="login-card">
                        <Header />
                        <div>
                            <form>
                                <br />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span className="p-float-label">
                                            <InputText id="username" value={useLoginDetail?.userId} onChange={(event) => setUseLoginDetail(prev => ({ ...prev, userId: event.target.value }))} />
                                            <label htmlFor="username">Email Address</label>
                                        </span>
                                    </div>
                                    <div className="col-sm-12 pt-4">
                                        <span className="p-float-label">
                                            <InputText id="password" value={useLoginDetail?.password} onChange={(event) => setUseLoginDetail(prev => ({ ...prev, password: event.target.value }))} />
                                            <label htmlFor="password">Password</label>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="pt-4">
                                <Button label="Login" onClick={() => onLogin()} icon="pi pi-sign-in" size="large" iconPos="right" />
                            </div>
                            <br />
                            <figure className="text-end">
                                <figcaption className="blockquote-footer">
                                    Don't have an account?<cite title="Source Title"> <b>Sign-Up</b> </cite>
                                </figcaption>
                            </figure>
                        </div>
                        <Footer />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default LoginApp;