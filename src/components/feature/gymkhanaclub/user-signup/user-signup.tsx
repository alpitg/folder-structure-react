import "./user-signup.scss"
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { IAuthenticationRequestModel } from "../../../../interfaces/auth.model";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import { AppState } from "../../../../store/reducers/root.reducer";
import { useSelector } from "react-redux";
import MessagesApp from "../../../ui/messages/messages";

const UserSignupApp = () => {
    const auth = useSelector((x: AppState) => x.authenticate);

    const [useLoginDetail, setUseLoginDetail] =
        useState<IAuthenticationRequestModel>({
            userName: "admin@gmail.com",
            password: "7773022212",
            remoteIp: "",
            latitude: "",
            longitude: "",
        });


    const onLogin = (e: any) => {
        e?.preventDefault();
    };

    return <>

        <div className="user-signup-app">
            <div className="login-section container">
                <Card className="login-card">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7 content-center display-none">
                            <img
                                className="image-bg"
                                src="/static/media/svg/secure_login.svg"
                                alt={"secure login"}
                            />
                            <div className="headerDivider"></div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <>
                                <div className="">
                                    <p className="h1">Gymkhana Club</p>
                                    <h1 className="display-5">Slot booking</h1>

                                    <blockquote className="blockquote">
                                        <p>
                                            Signup to <i>Book your slots</i>{" "}
                                        </p>
                                    </blockquote>
                                </div>
                                <div>
                                    <form onSubmit={onLogin} noValidate>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label htmlFor="userName">Email Address</label>
                                                <InputText
                                                    id="userName"
                                                    value={useLoginDetail?.userName}
                                                    onChange={(event) =>
                                                        setUseLoginDetail((prev) => ({
                                                            ...prev,
                                                            userName: event.target.value,
                                                        }))
                                                    }
                                                />
                                            </div>
                                            <div className="or mt-3 mb-3">OR</div>
                                            <div className="col-sm-12">
                                                <label htmlFor="password">Mobile number</label>
                                                <InputText
                                                    id="password"
                                                    value={useLoginDetail?.password}
                                                    onChange={(event) =>
                                                        setUseLoginDetail((prev) => ({
                                                            ...prev,
                                                            password: event.target.value,
                                                        }))
                                                    }
                                                />
                                            </div>

                                        </div>
                                        <div className="pt-4">
                                            {auth?.error &&
                                                auth?.error.map((error) => {
                                                    return (
                                                        <MessagesApp
                                                            type="alert-danger"
                                                            message={error}
                                                            key={error}
                                                        />
                                                    );
                                                })}
                                        </div>
                                        <SaveLoaderButtonApp
                                            type="submit"
                                            label={"Signup"}
                                            icon="pi pi-sign-in"
                                            size="large"
                                            disabled={auth.pending}
                                            enableLoader={auth.pending}
                                        />
                                    </form>
                                </div>
                                <div className="flex flex-wrap justify-content-end gap-2 mt-2">
                                    @ Technossplash Pvt Ltd to report any issue.
                                </div>
                            </>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </>
}

export default UserSignupApp;