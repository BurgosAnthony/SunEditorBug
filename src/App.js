// Javascript Version
import React, { useRef, useState } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// How to add an Event & Function from SunEditor's Docs
// Write this outside the return:
// const functionName = (thePropsInParanthesis) => {
// Whatever your function will be
// }

// Write this inside SunEditor tag:
// onEvent(functionName)

// See handleCopy & onCopy={handleCopy}


const MyComponent = props => {
  /**
 * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
 */
  const editor = useRef();

  const [state, setState] = useState("")

  // Ironically, the glitch is, if I set this event, I can't paste anymore
  const handlePaste = (e, cleanData, maxCharCount) => {
    console.log(`This is you pasting ${(e, cleanData, maxCharCount)}`)
  }

  const handleCopy = (e, clipboardData) => {
    console.log(`Success! You're copying! ${e} ${clipboardData}`)
  }

  let counter = 0;
  const handleClick = (e) => {
    counter++;
    console.log(`You just clicked ${counter} times`)
    console.log(e)
    if (counter === 10) {
      alert("You clicked 10 times!")
    }
  }

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };



  return (
    <div>
      <h1>Problem #2: A Bug</h1>
      <SunEditor
        onChange={setState}
        getSunEditorInstance={getSunEditorInstance}
        showToolbar={true}
        placeholder="Please type here"
        setContents=""
        // onPaste={handlePaste}
        onClick={handleClick}
        onCopy={handleCopy}
        setOptions={{
          height: 200,
          buttonList: [
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "list",
              "align",
              "fontSize",
              "formatBlock",
              "table",
              "image"
            ]
          ]
        }}
      />
    </div>
  );
};
export default MyComponent;
