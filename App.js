import React from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/Addoptions";

class App extends React.Component {
  render() {
    const title = "my react app";
    const subtitle = "what to emphasise on";
    const options = [
      "visit paris",
      "visit egypt",
      "visit tunis",
      "visit kenya",
      "visit seychelles",
    ];

    return <div>
      <Header titleData={title} subtitleData={subtitle} />
      <Action />
      <Options optionsData={options} />
      <AddOption />
       </div>;
  }
}

export default App;
