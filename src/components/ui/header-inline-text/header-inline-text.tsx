import "./header-inline-text.scss";

const HeaderInlineTextApp = (props: {
  title: string;
  subTitle: string;
  children?: any;
}) => {
  return (
    <div className="header-inline-text-app pt-2 pb-2">
      <>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="h6 inline-title m-0 me-2">{props.title} </span>
            <figcaption>
              <cite className="inline-sub-title" title={props.subTitle}>
                {props.subTitle}
              </cite>
            </figcaption>
          </div>
          <div className="d-flex align-items-center">
            <>{props.children}</>
          </div>
        </div>
      </>
    </div>
  );
};

export default HeaderInlineTextApp;
