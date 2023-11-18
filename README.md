## Helper

- (Redux)[https://blog.logrocket.com/understanding-redux-tutorial-examples/#what-redux]


## Features

- [x]  UI component
    - [x]  Folder structure
    - [x]  Login
    - [x]  Side bar
    - [x]  header
- [x]  axios
- [x]  Redux
- [x]  Saga
- [ ]  Custom Theme selection 
- [ ]  -----
- [ ]  -----


### Libraries
- Bootstrap css
- Bootstrap icons
- Prime react


### Init template for tsx
```ts
import "./facility-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_SUB_TITLE, FACILITY_TITLE } from "../../facility.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";

const FacilityListApp = () => {
    return (
        <div className="facility-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TITLE}
                        subTitle={FACILITY_SUB_TITLE}
                        children={
                            <>
                                Coming Next..
                            </>
                        }
                    />
                </div>
            </div>

            {
                <NoRecordApp />
            }
        </div>
    )
}

export default FacilityListApp;
```