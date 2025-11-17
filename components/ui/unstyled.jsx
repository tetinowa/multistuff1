import * as React from "react";

/**
 @param {object} props
 @param {React.ElementType} as
 @param {string} className
 */

function Unstyled({ as: Component, ...props }) {
  
  return (
    <Component 
      className=""
      {...props} 
    />
  );
}

Unstyled.displayName = "Unstyled";

export { Unstyled };