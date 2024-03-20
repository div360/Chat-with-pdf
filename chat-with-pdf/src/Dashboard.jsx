import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import {useBearStore} from "./store/store";
import Search from "./components/Search";
import userProfile from "./assets/user-profile.jpeg";
import ChatHistory from "./components/ChatHistory";
import ChatSection from "./components/ChatSection";
import axios from "axios";

const Dashboard = () => {
  // const [documents, setDocuments] = useState();

  const documents = useBearStore((state) => state.documents)

  const setDocuments = useBearStore((state) => state.setDocuments)

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("user_id"); // replace this with actual user id
    axios
      .get(import.meta.env.VITE_BACKEND_URL+`/documents/${userId}`)
      .then((response) => {
        setDocuments(response.data.documents);
        console.log(response.data.documents);
      })
      .catch((error) => {
        console.error("Error fetching documents", error);
      });
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] bg-[#f7f8fa] flex">
      <div className="side-tab hidden md:block md:absolute left-0 min-h-[100vh] min-w-[16vw] max-w-[16vw]">
        <div className="mt-[5vh] flex justify-start items-center gap-6 ml-6">
          <img src={userProfile} alt="" className="h-12 w-auto rounded-full" />
          <p
            className="font-bold text-[1.3rem] overflow-hidden whitespace-nowrap "
            style={{ maxWidth: "10vw", textOverflow: "ellipsis" }}
          >
            {localStorage.getItem("username")}
            asdjfhkasjdhfkjashdfkjhksdjfhlaksjfhlkasjdhflkjashf
          </p>
        </div>
        <div className="mt-5 flex justify-center mb-16">
          <Search />
        </div>
        <ChatHistory documents={documents} setDocuments={setDocuments}/>
      </div>
      <div className="hidden md:block md:min-h-[100vh] md:min-w-[17vw]"></div>
      <div className="h-[100vh] flex items-center">
        <ChatSection/>
      </div>
    </div>
  );
};

export default Dashboard;
