// import './App.css'
import react, { useState } from "react";
import UserForm from "./UserForm";

function Person() {
  const [value, setValue] = useState({
    name: "",
    title :"",
    description : "",
  });
  const [editUsers, setEditUsers] = useState(0);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "femi",
      title:"Title",
      description : "Description"
    },
  ]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log("it has entered the form....");
    e.preventDefault();
    // const id = crypto.randomUUID();

    if (editUsers) {
      const editUser = users.find((i) => i.id === editUsers);
      const updatedTodos = users.map((t) =>
        t.id === editUser.id
          ? (t = {
              id: t.id,
              name: value.name,
              title: value.title,
              description : value.description

            })
          : {
              id: t.id,
              name: t.name,
              title :t.title,
              description :t.description
            }
      );
      console.log(editUsers);
      console.log("UpdatedTodos", updatedTodos);
      setUsers(updatedTodos);
      setEditUsers(0);
      setValue({
        name: "",
        title: "",
        description: "",
      });

      return;
    }

    if (
      (
        value.name !== "",
      value.title !== "",
      value.description !== ""
      )
    ) {
      // const id = Math.floor(Math.random() * 10000) + 1;
      const id = Date.now();

      const payload = {
        id: id,
        name: value.name,
        title:value.title,
        description:value.description,
      };

      setUsers([...users, payload]);
      // console.log("payload from form", payload);
      setValue({
        name: "",
        email: "",
        title:"",
        description :"",
      });
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((record) => record.id !== id));
  };

  const handleEdit = (id) => {
    const editUser = users.find((r) => r.id === id);
    setValue({
      name: editUser.name,
      email: editUser.email,
      phone: editUser.phone,
      title: editUser.title,
      description: editUser.description,
    });
    setEditUsers(id);
    console.log(editUser);
  };
return(
  <div className="bg-white shadow rounded p-5 my-2">
    <h1 className="text-xl underline">Profile</h1>
    <UserForm
         name="name"
         type="text"
         value={value.name}
         handleChange={handleChange}
         labelText="Name"
    />
    <UserForm
         name="title"
         type="text"
         value={value.title}
         handleChange={handleChange}
         labelText="Title"
    />
    <UserForm
         name="description"
         type="text"
         value={value.description}
         handleChange={handleChange}
         labelText="Description"
    />
  </div>
);

}

export default Person;
