import { Card } from "primereact/card";
import FormApp from "../../components/ui/form/form";
import InputApp from "../../components/ui/input/input";
import MessagesApp from "../../components/ui/messages/messages";
import LoaderSpinnerApp from "../../components/ui/loader-spinner/loader-spinner";
import CalendarApp from "../../components/ui/calendar/calendar";
import CalendarSample1App from "../../components/ui/calendar/calendar-sample1/calendar-sample1";

const UIApp = () => {
  return (
    <>
      <>
        <div className="mb-3">
          <h2>
            Calendar
          </h2>
          <CalendarApp />
        </div>


        <div className="mb-3">
          <h2>
            Calendar
          </h2>
          <CalendarSample1App />
        </div>

        <div className="mb-3">
          <Card
            title={
              <>
                <span>{" Loader Spinner App"}</span>
              </>
            }
          >
            <LoaderSpinnerApp />
          </Card>
        </div>

        <div className="mb-3">
          <InputApp />
        </div>

        <div className="mb-3">
          <FormApp />
        </div>

        <div className="mb-3">
          <Card
            title={
              <>
                <span>{"Messages"}</span>
              </>
            }
          >
            <MessagesApp type="alert-success" message="Hi there!" />
            <MessagesApp type="alert-warning" message="Hi there!" />
            <MessagesApp type="alert-danger" message="Hi there!" />
          </Card>
        </div>
      </>
    </>
  );
};

export default UIApp;
