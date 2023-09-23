import { Card } from "primereact/card";

const InputApp = () => {
  return (
    <>
      <Card
        title={
          <>
            <span>{"Readonly - Input example"}</span>
          </>
        }
      >
        <div className="form-floating mb-3">
          <input
            type="email"
            readOnly
            className="form-control-plaintext"
            id="floatingEmptyPlaintextInput"
            placeholder="name@example.com"
            value={"Max Little"}
          />
          <label>Customer Name</label>
        </div>
      </Card>
    </>
  );
};

export default InputApp;
