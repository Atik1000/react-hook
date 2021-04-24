import React from "react";
import { UserContext, ChannelContext } from "../../App";

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(usr) => {
          return (
            <ChannelContext.Consumer>
              {(age) => {
                return (
                  <div>
                    user context value {usr},user channel value {age}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
