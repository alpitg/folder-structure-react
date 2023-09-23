import { Button } from "primereact/button";

const SaveLoaderButtonApp = (props: {
  label: string;
  icon: string;
  type: "button" | "submit" | "reset" | undefined;
  size: "small" | "large" | undefined;
  disabled: boolean;
  enableLoader?: boolean;
}) => {
  return (
    <div className="header-inline-text-app pt-2 pb-2">
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
          <Button label={"Loading..."} icon="pi pi-spinner" size="small" disabled />
        )}
      </>
    </div>
  );
};

export default SaveLoaderButtonApp;
