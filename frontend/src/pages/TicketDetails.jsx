import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../components/common/Loader";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    fetchTicket();
    fetchNotes();
  }, []);

  const fetchTicket = async () => {
    try {
      const res = await api.get(`/tickets/${id}`);
      setTicket(res.data);
      setStatus(res.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotes = async () => {
    try {
      const res = await api.get(`/tickets/${id}/notes`);
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async () => {
    try {
      await api.put(`/tickets/${id}`, {
        status,
      });

      toast.success("Status Updated");

      fetchTicket();
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  const addNote = async () => {
    if (note.trim() === "") return;

    try {
      await api.post(`/tickets/${id}/notes`, {
        note,
      });

      toast.success("Note Added");

      setNote("");

      fetchNotes();
    } catch (error) {
      toast.error("Unable to add note");
    }
  };

  if (!ticket)
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );

  return (
    <MainLayout>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Ticket {ticket.ticket_id}
      </h1>

      <div className="bg-white rounded-xl shadow p-6 md:p-8">

        <div className="space-y-3">

          <p>
            <strong>Customer :</strong> {ticket.customer_name}
          </p>

          <p>
            <strong>Email :</strong> {ticket.customer_email}
          </p>

          <p>
            <strong>Subject :</strong> {ticket.subject}
          </p>

          <p>
            <strong>Description :</strong>
          </p>

          <div className="bg-gray-100 rounded-lg p-4">
            {ticket.description}
          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Status
          </label>

          <div className="flex flex-col sm:flex-row gap-4 mt-3">

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="border rounded-lg p-3"
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>

            <button
              onClick={updateStatus}
              className="bg-blue-700 text-white px-6 rounded-lg"
            >
              Update
            </button>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Internal Notes
          </h2>

          <div className="space-y-3">

            {notes.length === 0 ? (
              <p>No notes yet.</p>
            ) : (
              notes.map((item) => (
  <div
    key={item.id}
    className="bg-gray-100 rounded-lg p-4"
  >
    <p className="text-gray-800">
      {item.note}
    </p>

    <p className="text-sm text-gray-500 mt-2">
      Added on {new Date(item.created_at).toLocaleString()}
    </p>
  </div>
))
            )}

          </div>

          <textarea
            rows="4"
            placeholder="Add a note..."
            className="w-full border rounded-lg p-3 mt-6"
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
          />

          <button
            onClick={addNote}
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Add Note
          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default TicketDetails;