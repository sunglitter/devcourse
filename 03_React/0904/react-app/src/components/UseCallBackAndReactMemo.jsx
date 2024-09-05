// import React, { useCallback, useState } from "react";
// import ChildComponent from "./ChildComponent";

// const UseCallBackAndReactMemo = () => {
//   const [count, setCount] = useState(0);

//   const updateHandler = useCallback(() => {
//     console.log("update");
//   }, []);
//   return (
//     <div>
//       <input type="number" onChange={(e) => setCount(e.target.value)} />
//       <ChildComponent update={updateHandler} />
//     </div>
//   );
// };

// export default UseCallBackAndReactMemo;

import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallBackAndReactMemo = () => {
  const [count, setCount] = useState(0);

  const updateHandler = useCallback(() => {
    console.log("update");
  }, []);

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <ChildComponent update={updateHandler} />
    </div>
  );
};

export default UseCallBackAndReactMemo;
