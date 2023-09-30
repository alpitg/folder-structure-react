import "./no-record.scss";

const NoRecordApp = () => {
  const noRecord = "No record found.";
  return (
    <div className="no-record-app">
      <div className="row">
        <div className="col-sm-12">
          <img
            className="img-size-no-data"
            src="/static/media/svg/no-record.svg"
            alt={noRecord}
          />
          <blockquote className="blockquote text-center text">
            <i> {noRecord}</i>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NoRecordApp;
