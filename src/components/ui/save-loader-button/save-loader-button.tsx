import { Button } from "primereact/button";
import LoaderSpinnerApp from "../loader-spinner/loader-spinner";
import "./save-loader-button.scss";

const SaveLoaderButtonApp = (props: {
  label: string;
  icon: string;
  type: "button" | "submit" | "reset" | undefined;
  size: "small" | "large" | undefined;
  disabled: boolean;
  enableLoader?: boolean;
}) => {
  return (
    <div className="save-loader-button-app pt-2 pb-2">
      <>
        {!props.enableLoader && (
          <Button
            type={props.type}
            label={props.label}
            icon={props.icon}
            size={props.size}
            disabled={props.disabled}
          />
        )}
        {props?.enableLoader && (
          <Button
            label={"Loading..."}
            icon={<LoaderSpinnerApp />}
            size={props.size}
            disabled
          />
        )}
      </>
    </div>
  );
};

export default SaveLoaderButtonApp;
