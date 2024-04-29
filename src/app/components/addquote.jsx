"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/db";
import { useRouter } from "next/navigation";

const AddQuoteForm = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isfeatured, setIsfeatured] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("description", description);
    formData.append("category", category);
    formData.append("isfeatured", isfeatured);
  
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("Quote Added!!");
        

        router.push("/profile");
      } else {
        alert("Failed to add Quote: " + data.error);
      }


     
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-10 md:p-24">
      <h2 className="text-2xl font-bold text-white mb-4">Add Poem</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-white font-bold mb-2"
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
            className="block text-white font-bold mb-2"
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Poem"}
        </button>
      </form>
    </div>
  );
};

export default AddQuoteForm;
