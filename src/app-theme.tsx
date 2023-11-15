import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { DARK } from './constants/global-contants/global-key.const';
import { themeUpdate } from './store/actions/appsetting.action';
import { AppState } from './store/reducers/root.reducer';

const AppTheme = () => {
    const theme = useSelector<AppState>(x => x.appsetting.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(themeUpdate());
    };

    return (
        <div className="d-flex align-center" >
            <Button
                icon="pi pi-sun"
                text
                title="Light theme"
                severity="secondary"
                aria-label="light-theme"
            />
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleTheme} checked={theme === DARK} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
            <Button
                icon="pi pi-moon"
                text
                title="Dark theme"
                severity="secondary"
                aria-label="dark-theme"
            />

        </div>
    );
}
export default AppTheme;