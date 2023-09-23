import { Button } from "primereact/button";
import "./navbar.scss";

const NavbarApp = ({ isOpenSideBar }: any) => {
  return (
    <>
      <div className="navbar-app">
        <nav
          className={
            "navbar-content " + (isOpenSideBar ? "margin-left" : "")
          }
        >
          <div className="nav-left"> Techno </div>
          <div className="nav-right">
            <Button
              icon="pi pi-moon"
              text
              title="Dark theme"
              severity="secondary"
              aria-label="dark-theme"
            />
            <Button
              icon="pi pi-sun"
              text
              title="Light theme"
              severity="secondary"
              aria-label="light-theme"
            />
            <Button
              icon="pi pi-comment"
              text
              title="Comments"
              severity="secondary"
              aria-label="comment"
            />
            <Button
              icon="pi pi-bell"
              text
              title="Notifications"
              severity="secondary"
              aria-label="notification"
            />
            {/* <i className="pi pi-bell p-overlay-badge">
            <Badge value="2"></Badge>
          </i>
          <i className="pi pi-envelope p-overlay-badge">
            <Badge severity="danger"></Badge>
          </i> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarApp;
