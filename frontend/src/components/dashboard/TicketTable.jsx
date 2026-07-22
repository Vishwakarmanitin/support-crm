import { Link } from "react-router-dom";

function TicketTable({ tickets }) {
  return (
    <div className="bg-white shadow rounded-xl mt-8 overflow-hidden">
      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Ticket ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Created</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>

          {tickets.length === 0 ? (

            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-500"
              >
                No Tickets Found
              </td>
            </tr>

          ) : (

            tickets.map((ticket) => (

              <tr key={ticket.id} className="border-t">

                <td className="p-4">
                  {ticket.ticket_id}
                </td>

                <td className="p-4">
                  {ticket.customer_name}
                </td>

                <td className="p-4">
                  {ticket.subject}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      ticket.status === "Open"
                        ? "bg-red-500"
                        : ticket.status === "In Progress"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td className="p-4 text-sm text-gray-600">
                  {ticket.created_at}
                </td>

                <td className="p-4">
                  <Link
                    to={`/ticket/${ticket.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>
    </div>
  );
}

export default TicketTable;