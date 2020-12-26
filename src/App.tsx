import React, { FC } from "react";
import { Root } from "./Root";
import { BrowserRouter as Router } from "react-router-dom";


const apiKey =  "dab912b457b63b9afc10c02313053ba1";
const token = "a40c12f2f48d77365c12b5694ccb08f649b417f1fae1d79c9eb9a2dc03988f06";

const get = () => {
    fetch('https://api.trello.com/1/tokens/{token}/member?key=0471642aefef5fa1fa76530ce1ba4c85&token=44ed3c7b8b8b5169e32584b2ad5eaabfb62f3e4c74dbaf6d767367fa0fdd21e9', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            console.log(
                `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => console.log(text))
        .catch(err => console.error(err));
};

const App: FC= () => {
  return (
      <Router>
          <Root/>
      </Router>
  );
};

export default App;
