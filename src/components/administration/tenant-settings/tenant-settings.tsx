import "./tenant-settings.scss";
import HeaderInlineTextApp from "../../ui/header-inline-text/header-inline-text";
import { TENANT_SETTINGS_APPEARANCE, TENANT_SETTINGS_APPLICATION_DARK_LOGO, TENANT_SETTINGS_APPLICATION_LIGHT_LOGO, TENANT_SETTINGS_INVOICE, TENANT_SETTINGS_INVOICE_INFORMATION, TENANT_SETTINGS_SAVE_ALL, TENANT_SETTINGS_SECURITY, TENANT_SETTINGS_SECURITY_PASSWORD_COMPLEXITY, TENANT_SETTINGS_SUB_TITLE, TENANT_SETTINGS_TITLE, TENANT_SETTINGS_USER_MANAGEMENT, TENANT_SETTINGS_USER_MANAGEMENT_ALLOW_TO_REGISTER, TENANT_SETTINGS_USE_DEFAULT_SETTINGS } from "./tenant-settings.const";
import UploadImageApp from "../../ui/upload/upload-image/upload-image";
import { useState } from "react";
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";
import { Button } from "primereact/button";
import SaveLoaderButtonApp from "../../ui/save-loader-button/save-loader-button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

const TenantSettingsApp = () => {
    const [content, setContent] = useState<any>({
        textContent: "",
        htmlTextContent: "",
        file: ""
    });

    const fieldName = {
        legalName: "Legal name",
        address: "Address",
        taxNo: "Tax/VatNo",
    };

    const onFileSelected = (e: any) => {
        setContent((prev: any) => ({
            ...prev,
            file: URL.createObjectURL(e.target.files[0]) ?? "",
        }));
    };

    return (
        <div className="tenant-settings-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={TENANT_SETTINGS_TITLE}
                        subTitle={TENANT_SETTINGS_SUB_TITLE}
                    />
                </div>
            </div>

            <Card
                children={
                    <>
                        <TabView>
                            <TabPanel header={TENANT_SETTINGS_APPEARANCE}>
                                <>
                                    <div className="row text-center appearance">
                                        <div className="col-sm-6 p-4 dark-theme-logo">
                                            <h5 className="dark-theme-sample-text">{TENANT_SETTINGS_APPLICATION_DARK_LOGO}</h5>
                                            <UploadImageApp onFileSelected={onFileSelected} />
                                        </div>
                                        <div className="col-sm-6 p-4">
                                            <h5>{TENANT_SETTINGS_APPLICATION_LIGHT_LOGO}</h5>
                                            <UploadImageApp onFileSelected={onFileSelected} />
                                        </div>
                                    </div>
                                </>
                            </TabPanel>
                            <TabPanel header={TENANT_SETTINGS_USER_MANAGEMENT}>
                                <>
                                    <div className="form-group">
                                        <div className="mt-3 mb-3">
                                            <Checkbox
                                                inputId={TENANT_SETTINGS_USER_MANAGEMENT_ALLOW_TO_REGISTER}
                                                name={TENANT_SETTINGS_USER_MANAGEMENT_ALLOW_TO_REGISTER}
                                                value={true}
                                                checked={false}
                                            ></Checkbox>
                                            <label htmlFor={TENANT_SETTINGS_USER_MANAGEMENT_ALLOW_TO_REGISTER} className="ms-2">
                                                <figcaption>
                                                    Default
                                                    <span className="inline-sub-title ms-2">
                                                        {TENANT_SETTINGS_USER_MANAGEMENT_ALLOW_TO_REGISTER}
                                                    </span>
                                                </figcaption>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            </TabPanel>
                            <TabPanel header={TENANT_SETTINGS_SECURITY}>
                                <>
                                    <b>
                                        {TENANT_SETTINGS_SECURITY_PASSWORD_COMPLEXITY}
                                    </b>

                                    <div className="form-group">
                                        <div className="mt-3 mb-3">
                                            <Checkbox
                                                inputId={TENANT_SETTINGS_USE_DEFAULT_SETTINGS}
                                                name={TENANT_SETTINGS_USE_DEFAULT_SETTINGS}
                                                value={true}
                                                checked={false}
                                            ></Checkbox>
                                            <label htmlFor={TENANT_SETTINGS_USE_DEFAULT_SETTINGS} className="ms-2">
                                                <figcaption>
                                                    Default
                                                    <span className="inline-sub-title ms-2">
                                                        {TENANT_SETTINGS_USE_DEFAULT_SETTINGS}
                                                    </span>
                                                </figcaption>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            </TabPanel>
                            <TabPanel header={TENANT_SETTINGS_INVOICE}>
                                <>
                                    <b>
                                        {TENANT_SETTINGS_INVOICE_INFORMATION}
                                    </b>

                                    <div className="row">
                                        <div className="col-sm-12 pt-2">
                                            <div className={"d-flex flex-column gap-2 " + fieldName?.legalName}>
                                                <label htmlFor={fieldName?.legalName}>
                                                    {fieldName?.legalName}
                                                </label>
                                                <InputText
                                                    id={fieldName?.legalName}
                                                    value={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 pt-2">
                                            <div className={"d-flex flex-column gap-2 " + fieldName?.legalName}>
                                                <label htmlFor={fieldName?.address}>
                                                    {fieldName?.address}
                                                </label>
                                                <InputText
                                                    id={fieldName?.address}
                                                    value={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 pt-2">
                                            <div className={"d-flex flex-column gap-2 " + fieldName?.legalName}>
                                                <label htmlFor={fieldName?.taxNo}>
                                                    {fieldName?.taxNo}
                                                </label>
                                                <InputText
                                                    id={fieldName?.taxNo}
                                                    value={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </TabPanel>
                        </TabView>

                    </>
                }
                footer={
                    <>
                        <div className="row">
                            <div className="col-sm-12">
                                <SaveLoaderButtonApp
                                    type="submit"
                                    label={TENANT_SETTINGS_SAVE_ALL}
                                    icon="pi pi-save"
                                    size="small"
                                    disabled={false}
                                />
                            </div>
                        </div>
                    </>
                }
            />

        </div>
    )
}

export default TenantSettingsApp;