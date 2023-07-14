import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      Name={emojiTerm.name}
      Emoji={emojiTerm.emoji}
      Description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry
        Emoji = {"💪"}
        Name = {"Tense Biceps"}
        Description = {"“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."}
        /> */}
        {/* <Entry
        Emoji = {}
        Name = {}
        Description = {}
        />
        <Entry
        Emoji = {}
        Name = {}
        Description = {}
        /> */}
      </dl>
    </div>
  );
}

export default App;
