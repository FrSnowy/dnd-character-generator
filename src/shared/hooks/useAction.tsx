import React from "react";

const useAction = (action: Function, condition: boolean = true) => {
  React.useEffect(() => {
    condition && action();
  }, [condition, action]);
};

export default useAction;
