"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const AddPoet = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [borndate, setBornDate] = useState("");
  const [dieddate, setDiedDate] = useState("");
  const [gender, setGender] = useState("");
  
  const [isfeatured, setIsfeatured] = useState(false);
  const [location, setLocation] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("borndate", borndate);
    formData.append("dieddate", dieddate);
    formData.append("gender", gender);
    formData.append("location", location);
    
    formData.append("isfeatured", isfeatured);

    try {
      const res = await fetch("/api/poet", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("Poet Added!!");
        

        router.push("/poet");
      } else {
        alert("Failed to add poet: " + data.error);
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center p-10 md:p-24 items-center h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        <h1 className="text-3xl font-medium text-black mb-6">Add Poet</h1>
        <form noValidate action="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" className="block mb-2 text-sm font-bold ">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter poet's name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="image" className="block mb-2 text-sm font-bold">
              Image
            </Label>
            <Input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="borndate" className="block mb-2 text-sm font-bold">
              Born Date
            </Label>
            <Input
              type="date"
              name="borndate"
              value={borndate}
              onChange={(e) => setBornDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="dieddate" className="block mb-2 text-sm font-bold">
              Died Date
            </Label>
            <Input
              type="date"
              name="dieddate"
              value={dieddate}
              onChange={(e) => setDiedDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="gender" className="block mb-2 text-sm font-bold">
              Gender
            </Label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="" disabled>Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div>
            <Label htmlFor="location" className="block mb-2 text-sm font-bold">
              Location
            </Label>
            <Input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
          <label
            htmlFor="isfeatured"
            className="block text-white font-bold mb-2"
          >
            <input
              type="checkbox"
              id="isfeatured"
              checked={isfeatured}
              onChange={(e) => setIsfeatured(e.target.checked)}
              className="mr-2"
            />
            Featured
          </label>
        </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm"
            >
              Add Poet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoet;

