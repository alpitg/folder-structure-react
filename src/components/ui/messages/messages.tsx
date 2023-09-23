import "./messages.scss";

const MessagesApp = (props: {
  type?: "alert-success" | "alert-warning" | "alert-danger";
  message?: string;
  close?: () => void;
}) => {
  return (
    <div className="messages-app">
      <div role="alert" className={"alert " + props.type}>
        {props.message}
        <span
          className="icon cursor-pointer"
          title="Close"
          onClick={props.close}
        >
          <i className="pi pi-fw pi-times float-end"></i>
        </span>
      </div>
    </div>
  );
};

export default MessagesApp;
