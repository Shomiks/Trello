import React, { FC } from "react";



const Authenticate: FC = () => {
    return (<div><input placeholder="APIKey"/><input placeholder="Token"/><button onClick={handleLogin}>Login</button></div>)
};

export default Authenticate;