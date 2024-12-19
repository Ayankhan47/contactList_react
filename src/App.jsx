import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setallUsers([...allUsers,{name,company,phone}]);
    console.log(allUsers);
    setname("");
    setcompany("");
    setphone("");
  };
  const deleteHandler = (i) => {
    var copyUsers = [...allUsers]
    copyUsers.splice(i, 1);
    setallUsers(copyUsers);    
  }  
  return (
    <div
      className="h-screen bg-gray-50 p-6 flex font-[gilroy]"
      id="main"
    >
      <div id="left" className="h-[90vh] w-[50vw] p-6 bg-white rounded-xl">

      <h1 className="font-[gilroy] text-3xl font-semibold mb-[2vw]">Add Contact</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-[2vw] flex flex-col justify-start gap-3"
        >
          <label className="text-lg">Name <sup className="text-red-500 text-md">*</sup></label>
        <input
          onChange={(elem) => {
            setname(elem.target.value);
          }}
          value={name}
          className="mb-6 px-4 mr-5 h-[3vw] w-[45vw] placeholder:text-base rounded-lg border-2 border-gray-100 outline-none"
          type="text"
          placeholder="Enter name"
          />
          <label className="text-lg">Company <sup className="text-red-500 text-md">*</sup></label>
        <input
        onChange={(elem)=>{
          setcompany(elem.target.value);
        }}
        value={company}
        className="px-4 mb-6 h-[3vw] w-[45vw] placeholder:text-base rounded-lg border-2 border-gray-100 outline-none"
        type="text"
        placeholder="Enter company"
        />
        <label className="text-lg">Phone <sup className="text-red-500 text-md">*</sup></label>
        <input
        onChange={(elem)=>{
          setphone(elem.target.value);
        }}
        value={phone}
        className=" px-4 mb-6 h-[3vw] w-[45vw] placeholder:text-base rounded-lg border-2 border-gray-100 outline-none"
        type="text"
        placeholder="Enter Phone Number"
        />
        <div id="checkbox" className="felx text-lg">
          <input className="h-[2.6vh] w-[2.6vw]" type="checkbox" />
          <label className="ml-3">Favroite</label>
        </div>
        <input
          className="py-3 px-5 rounded-xl bg-blue-500 text-white text-xl font-semibold active:scale-95"
          type="submit"
          value="Add Contact"
          />
      </form>
          </div>

      <div id="right" className="p-[3vw] h-[90vh] w-[50vw] overflow-y-auto scrollbar-hide">
        <h1 className="font-semibold text-3xl mb-5">Contact List</h1>
        {allUsers.map(function (elem,i) {
          return (
            <div
            key={i}
              className=" relative p-2 w-[40vw] rounded-lg inline-block mb-10 bg-white shadow-md group"
              id="card"
            >
              <button onClick={()=>{
                deleteHandler(i)
              }} className="text-white bg-red-500 text-xs py-1 px-2 rounded-lg absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
              <h1 className="my-2 text-3xl font-semibold">{elem.name}</h1>
              <h3 className="text-gray-700 text-xl font-medium">Company: {elem.company}</h3>
              <h3 className="text-gray-700 text-xl font-medium">Phone: {elem.phone}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
