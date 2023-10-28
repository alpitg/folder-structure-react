import "./login.scss";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authenticateRequest } from "../../../store/actions/auth.action";
import { IAuthenticationRequestModel } from "../../../interfaces/auth.model";
import { ROUTE_URL } from "../constants/routes.const";
import SaveLoaderButtonApp from "../../ui/save-loader-button/save-loader-button";
import AuthService from "../../../services/auth.service";
import { AppState } from "../../../store/reducers/root.reducer";
import MessagesApp from "../../ui/messages/messages";

const LoginApp = () => {
  const auth = useSelector((x: AppState) => x.authenticate);
  const isAuthenticated = AuthService.getAuthDetail()?.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [useLoginDetail, setUseLoginDetail] =
    useState<IAuthenticationRequestModel>({
      userName: "admin@gmail.com",
      password: "admin@123",
      remoteIp: "",
      latitude: "",
      longitude: "",
    });

  useEffect(() => {
    // NOTE: Currently checking both localstorage & store for auth flag
    if (isAuthenticated || auth?.result?.isAuthenticated) {
      navigate(ROUTE_URL.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.result?.isAuthenticated]);

  const onLogin = (e: any) => {
    e?.preventDefault();
    dispatch(authenticateRequest(useLoginDetail));
  };

  return !isAuthenticated ? (
    <div className="login-app">
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
                  <p className="h1">Tsubaki India</p>
                  <h1 className="display-5">Welcome back</h1>

                  <blockquote className="blockquote">
                    <p>
                      Sign-in to continue to <i>Tsubaki inventory</i>{" "}
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

                      <div className="col-sm-12 mt-2">
                        <label htmlFor="password">Password</label>
                        <InputText
                          id="password"
                          type="password"
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
                      label={"Login"}
                      icon="pi pi-sign-in"
                      size="large"
                      disabled={auth.pending}
                      enableLoader={auth.pending}
                    />
                  </form>
                  <figure className="text-end">
                    <figcaption className="blockquote-footer">
                      Don't have an account?
                      <cite title="Source Title">
                        <b>Sign-Up</b>
                      </cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="flex flex-wrap justify-content-end gap-2">
                  @ Please connect with CornPlex Pvt Ltd to report any issue.
                </div>
              </>
            </div>
          </div>
        </Card>
      </div>
    </div>
  ) : null;
};
export default LoginApp;
