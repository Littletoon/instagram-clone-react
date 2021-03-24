import React from "react";
import NewMessage from "../../components/NewMessage/NewMessage";
import HomeBox from "../../components/HomeBox/HomeBox";
import "./Direct.scss";
import LastMessages from "../../components/LastMessages/LastMessages";
const Direct = () => {
  return (
    <HomeBox>
      <div className="direct">
        <LastMessages />
        <NewMessage />
      </div>
    </HomeBox>
  );
};

export default Direct;
