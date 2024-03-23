import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [submitted, setsubmitted] = useState(false);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const submit = () => {
    setsubmitted(true);
  };

  const close = () => {
    setsubmitted(false);
  };

  return (
    <>
      <div className="layout">
        <div className="header"></div>
        <div className="middle">
          <div className="left">
            <div className="body">
              <div className="title">title</div>
              <div className="dock">a b c d</div>
              <div className="textarea">
                <textarea
                  className="custom"
                  placeholder="Enter text here"
                ></textarea>
              </div>
            </div>

            <div className="footer">
              {windowWidth < 1024 && submitted && data.length > 0 ? (
                <div className="p">
                  <button onClick={close}>close</button>
                  <div className="card">card</div>
                </div>
              ) : (
                <div className="save_row">
                  <button className="button">save</button>
                  <button className="button" onClick={submit}>
                    submit
                  </button>
                </div>
              )}
            </div>
          </div>
          {submitted && data.length > 0 ? (
            <div className="right">
              <button onClick={close}>close</button>
              <div className="card">card</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
