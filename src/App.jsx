import React, { useState } from "react";
import { History, ResponseTable, RequestTable, NavBar } from "./all-components";

const App = () => {
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [responseData, setResponseData] = useState("");
  const [responseHeaders, setResponseHeaders] = useState("");
  const [responseCookie, setResponseCookie] = useState("");
  const [history, setHistory] = useState([]);

  const sendHanlder = () => {};
  return (
    <React.Fragment>
      {/* navbar */}
      <NavBar />
      <div className="container-lx">
        <div className="row justify-content-center g-5">
          <div className="col-4">
            <History history={history} setHistory={setHistory} />
          </div>
          <div className="col">
            <div className="d-flex flex-column justify-content-between align-items-start">
              <RequestTable
                body={body}
                setBody={setBody}
                headers={headers}
                setHeaders={setHeaders}
                sendHanlder={sendHanlder}
              />
              <ResponseTable
                responseData={responseData}
                setResponseData={setResponseData}
                responseCookie={responseCookie}
                setResponseCookie={setResponseCookie}
                responseHeaders={responseHeaders}
                setResponseHeaders={setResponseHeaders}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
