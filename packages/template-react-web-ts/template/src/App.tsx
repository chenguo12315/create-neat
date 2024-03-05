import React, { FC } from "react";

const App: FC = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", margin: "auto" }}>
        <div>欢迎访问</div>
        <div style={{ marginBottom: "10px" }}>
          <a href="https://juejin.cn/user/3782764966460398/posts">掘金地址</a>
        </div>
        <div>
          <a href="https://github.com/xun082/create-neat.git">Github地址</a>
        </div>
      </h1>
    </div>
  );
};

export default App;
