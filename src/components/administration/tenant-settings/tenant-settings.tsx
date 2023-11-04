import "./tenant-settings.scss";
import HeaderInlineTextApp from "../../ui/header-inline-text/header-inline-text";
import { TENANT_SETTINGS_APPEARANCE, TENANT_SETTINGS_APPLICATION_DARK_LOGO, TENANT_SETTINGS_APPLICATION_LIGHT_LOGO, TENANT_SETTINGS_INVOICE, TENANT_SETTINGS_SECURITY, TENANT_SETTINGS_SUB_TITLE, TENANT_SETTINGS_TITLE, TENANT_SETTINGS_USER_MANAGEMENT } from "./tenant-settings.const";
import UploadImageApp from "../../ui/upload/upload-image/upload-image";
import { useState } from "react";
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";

const TenantSettingsApp = () => {
    const [content, setContent] = useState<any>({
        textContent: "",
        htmlTextContent: "",
        file: ""
    });

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
                        children={
                            <>
                                Coming Next..
                            </>
                        }
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
                                hih
                            </TabPanel>
                            <TabPanel header={TENANT_SETTINGS_SECURITY}>
                                hih
                            </TabPanel>
                            <TabPanel header={TENANT_SETTINGS_INVOICE}>
                                hih
                            </TabPanel>
                        </TabView>

                    </>
                }
            />

        </div>
    )
}

export default TenantSettingsApp;