import { useState } from "react";

const ToggleMessage = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="container mb-3">
        <h2 className="mb-3">Toggle Message</h2>
        <button className="btn btn-primary mb-3" onClick={() => setView(!view)}>
          Toggle Message
        </button>
        <br />
        {view && <h4 className="blue">"Hello, Welcome to React"</h4>}
      </div>
      <hr />
    </>
  );
};

export default ToggleMessage;
