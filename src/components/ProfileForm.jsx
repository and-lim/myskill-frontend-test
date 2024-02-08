import React, { useState } from "react";
import InputForm from "./InputForm";
import Person from "./Person";
import PictureForm from "./PictureForm";

function ProfileForm({
  handleSubmit,
  editRecords,
  name,
  title,
  email,
  phone,
  profilePic,
  desc,
  position,
  company,
  startDate,
  endDate,
  handleChange,
}) {
  return (
    <form className="w-full p-6" onSubmit={handleSubmit}>

      <div className="bg-white shadow rounded p-5 mb-5 ">
        <h1 className="underline mb-5">Background Image</h1>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

      <div className="bg-white shadow rounded p-5 ">
        <h1 className="underline mb-5">Background Image</h1>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <PictureForm
              name="profilepic"
              type="file"
              value={profilePic}
              handleChange={handleChange}

            />
          </label>
        </div>
      </div>

      <Person />

      <div className="bg-white shadow rounded my-6 p-5">
        <h1 className="text-xl underline mb-5">Profile</h1>
        <InputForm
          name="name"
          type="text"
          value={name}
          handleChange={handleChange}
          labelText="Name"
        />

        <InputForm
          name="title"
          type="text"
          value={title}
          handleChange={handleChange}
          labelText="Title"
        />
        <label htmlFor="">Bio</label>
        <textarea
          className="block px-3 shadow border w-full py-1 outline-none rounded-sm"
          type="text"
          name="desc"
          value={desc}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* <InputForm
        name="phone"
        type="tel"
        value={phone}
        handleChange={handleChange}
        labelText="Phone No"
      /> */}
      {/* <InputForm
        name="email"
        type="email"
        value={email}
        handleChange={handleChange}
        labelText="Email"
      /> */}

      <div className="bg-white rounded shadow p-5 my-5">
        <h1 className="text-xl underline mb-5">Portfolio</h1>
        <InputForm
          name="name"
          type="text"
          value={name}
          handleChange={handleChange}
          labelText="Name"
        />

        <InputForm
          name="position"
          type="text"
          value={position}
          handleChange={handleChange}
          labelText="Position"
        />
        <InputForm
          name="company"
          type="text"
          value={company}
          handleChange={handleChange}
          labelText="Company"
        />
        <div className="grid grid-cols-2 gap-5">
          <InputForm
            name="startDate"
            type="Date"
            value={startDate}
            handleChange={handleChange}
            labelText="Start Date"
          />
          <InputForm
            name="startDate"
            type="Date"
            value={endDate}
            handleChange={handleChange}
            labelText="Start Date"
          />
        </div>
        <div className="my-2">
          <label htmlFor="">Bio</label>
          <textarea
            className="block px-3 shadow border w-full py-1 outline-none rounded-sm"
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="py-2 my-4 font-semibold w-full text-center bg-blue-200 hover:bg-blue-400"
      >
        {editRecords ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default ProfileForm;
