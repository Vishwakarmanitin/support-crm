import { Link } from "react-router-dom";

function TicketTable({ tickets }) {
  return (
    <div className="bg-white shadow rounded-xl mt-8 overflow-x-auto">
      <table className="min-w-[900px] w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left whitespace-nowrap">Ticket ID</th>
            <th className="p-4 text-left whitespace-nowrap">Customer</th>
            <th className="p-4 text-left whitespace-nowrap">Subject</th>
            <th className="p-4 text-left whitespace-nowrap">Status</th>
            <th className="p-4 text-left whitespace-nowrap">Created</th>
            <th className="p-4 text-left whitespace-nowrap">Action</th>
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

                <td className="p-4 whitespace-nowrap">
                  {ticket.ticket_id}
                </td>

                <td className="p-4 whitespace-nowrap">
                  {ticket.customer_name}
                </td>

                <td className="p-4 whitespace-nowrap">
                  {ticket.subject}
                </td>

                <td className="p-4 whitespace-nowrap">
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

                <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                  {ticket.created_at}
                </td>

                <td className="p-4 whitespace-nowrap">
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
