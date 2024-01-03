import React from "react";
import useScreenSize from "./useScreenSize";
import "./App.css";

const App = () => {
  const screenSize = useScreenSize();

  return (
    <div className="container">
      <h2>Screen Size Detection</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Width:</strong>
            </td>
            <td>{screenSize.width}</td>
          </tr>
          <tr>
            <td>
              <strong>Height:</strong>
            </td>
            <td>{screenSize.height}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
