import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function CreateTicket() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = formData.customer_email.trim().toLowerCase();

    // Email format validation
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Block common fake domains
    const blockedDomains = [
      "example.com",
      "test.com",
      "fake.com",
      "abc.com",
      "mail.com",
    ];

    const domain = email.split("@")[1];

    if (blockedDomains.includes(domain)) {
      toast.error("Please enter a real email address.");
      return;
    }

    setLoading(true);

    try {
      // Check duplicate ticket
      const duplicate = await api.post("/tickets/check-duplicate", {
        customer_email: email,
        subject: formData.subject,
      });

      if (duplicate.data.duplicate) {
        toast.error(duplicate.data.message);
        setLoading(false);
        return;
      }

      // Create ticket
      await api.post("/tickets", {
        ...formData,
        customer_email: email,
      });

      toast.success("Ticket Created Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Create Ticket
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 md:p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold">
            Customer Name
          </label>

          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Customer Email
          </label>

          <input
            type="email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <button
          disabled={loading}
          className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 disabled:bg-gray-400"
        >
          {loading ? "Creating..." : "Create Ticket"}
        </button>
      </form>
    </MainLayout>
  );
}

export default CreateTicket;