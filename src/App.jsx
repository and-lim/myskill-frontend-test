// import './App.css'
import react, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import Profilecard from "./components/Profilecard";

function App() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    title: "",
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    email: "",
    profilePic: "",
    bgPic: "",
    desc: "",
  });
  const [editRecords, setEditRecords] = useState(0);

  const [records, setRecords] = useState([
    {
      id: 1,
      name: "Abcdefgh",
      phone: "12345678",
      title:"Title",
      email: "abc0@gmail.com",
      position :"Front End Developer",
      profilePic:
        "img/profile.png",
      bgPic:"img/bg.png",
      startDate : "Januari 2023",
      endDate :  "December 2023",
      desc: "This is Description",
    },
  ]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log("it has entered the form....");
    e.preventDefault();
    // const id = crypto.randomUUID();

    if (editRecords) {
      const editRecord = records.find((i) => i.id === editRecords);
      const updatedTodos = records.map((t) =>
        t.id === editRecord.id
          ? (t = {
              id: t.id,
              name: value.name,
              phone: value.phone,
              title: value.title,
              position: value.position,
              company: value.company,
              startDate: value.startDate,
              endDate: value.endDate,
              email: value.email,
              profilePic: value.profilePic,
              bgPic: value.bgPic,
              desc: value.desc,
            })
          : {
              id: t.id,
              name: t.name,
              email: t.email,
              profilePic: t.profilePic,
              title :t.title,
              position: t.position,
              company : t.company,
              startDate: t.startDate,
              endDate: t.endDate,
              profilePic: t.profilePic,
              bgPic: t.bgPic,
              phone: t.phone,
              desc: t.desc,
            }
      );
      console.log(editRecords);
      console.log("UpdatedTodos", updatedTodos);
      setRecords(updatedTodos);
      setEditRecords(0);
      setValue({
        name: "",
        email: "",
        title: "",
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        profilePic: "",
        bgPic: "",
        phone: "",
        desc: "",
      });

      return;
    }

    if (
      (value.name !== "",
      value.phone !== "",
      value.title !== "",
      value.position !== "",
      value.company !== "",
      value.startDate !== "",
      value.endDate !== "",
      value.email !== "",
      value.profilePic !== "",
      value.bgPic !== "",
      value.desc !== "")
    ) {
      // const id = Math.floor(Math.random() * 10000) + 1;
      const id = Date.now();

      const payload = {
        id: id,
        name: value.name,
        title:value.title,
        position:value.position,
        company:value.company,
        startDate:value.startDate,
        endDate:value.endDate,
        phone: value.phone,
        email: value.email,
        profilePic: value.profilePic,
        bgPic: value.bgPic,
        desc: value.desc,
      };

      setRecords([...records, payload]);
      // console.log("payload from form", payload);
      setValue({
        name: "",
        email: "",
        title:"",
        position :"",
        profilePic: "",
        bgPic: "",
        phone: "",
        desc: "",
      });
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleEdit = (id) => {
    const editRecord = records.find((r) => r.id === id);
    setValue({
      name: editRecord.name,
      email: editRecord.email,
      phone: editRecord.phone,
      title: editRecord.title,
      position: editRecord.position,
      company: editRecord.company,
      startDate: editRecord.startDate,
      endDate: editRecord.endDate,
      phone: editRecord.phone,
      profilePic: editRecord.profilePic,
      bgPic: editRecord.bgPic,
      desc: editRecord.desc,
    });
    setEditRecords(id);
    console.log(editRecord);
  };

  return (
    <div className="mt-12 mx-auto max-w-screen-xl">
      <div className="flex lg:ml-7 gap-2">
        <button type="button" class="text-gray-900 bg-white border border-blue-700 text-blue-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">+ Add Portfolio </button>
        <button type="button" class="text-gray-500 bg-white border bg-gray-50 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Simpan Peruabahan</button>
      </div>
      <div className="flex lg:flex-row">
        {/* <ProfileList
          records={records}
          onDelete={handleDelete}
          onEdit={handleEdit}
        /> */}
        <ProfileForm
          handleSubmit={handleSubmit}
          editRecords={editRecords}
          handleChange={handleChange}
          name={value.name}
          email={value.email}
          phone={value.phone}
          profilePic={value.profilePic}
          desc={value.desc}
          title={value.title}
        />
        <Profilecard
          records={records}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />  
      </div>
    </div>
  );
}

export default App;
