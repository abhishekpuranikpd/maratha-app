"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/db";
import { useRouter } from "next/navigation";

const AddShayariForm = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isfeatured, setIsfeatured] = useState(false);
  const [poetId, setPoetId] = useState("");
  const [poets, setPoets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();



  useEffect(() => {
    const fetchPoets = async () => {
      try {
        const response = await fetch("/api/poet");
        const data = await response.json();
        console.log("Poets data:", data);
        setPoets(data.data);
      } catch (error) {
        console.error("Error fetching poets:", error);
      }
    };

    fetchPoets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("description", description);
    formData.append("category", category);
    formData.append("poetId", poetId);
    formData.append("isfeatured", isfeatured);
  
    try {
      const res = await fetch("/api/shayari", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("Shayari Added!!");
        

        router.push("/poet");
      } else {
        alert("Failed to add Shayari: " + data.error);
      }


     
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Shayari</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Quote
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full px-3 py-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="poet" className="block text-gray-700 font-bold mb-2">
            Poet
          </label>
          
            <select
              id="poet"
              className="w-full px-3 py-2 border rounded"
              value={poetId}
              onChange={(e) => setPoetId(e.target.value)}
              required
            >
              <option value="">Select Poet</option>
              {poets.map((poet) => (
                <option key={poet.id} value={poet.id}>
                  {poet.name}
                </option>
              ))}
            </select>
        
        </div>
        <div className="mb-4">
          <label
            htmlFor="isfeatured"
            className="block text-gray-700 font-bold mb-2"
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Shayari"}
        </button>
      </form>
    </div>
  );
};

export default AddShayariForm;
