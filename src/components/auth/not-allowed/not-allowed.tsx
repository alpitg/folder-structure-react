import "./not-allowed.scss";

const NotAllowedApp = () => {
  const notallowed = "You dont have required access.";
  return (
    <div className="not-allowed-app">
      <div className="row">
        <div className="col-sm-12">
          <img
            className="img-size-not-allowed"
            src="/static/media/svg/no-permission.svg"
            alt={notallowed}
          />
          <blockquote className="blockquote text-center text">
            <i> {notallowed}</i>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NotAllowedApp;
