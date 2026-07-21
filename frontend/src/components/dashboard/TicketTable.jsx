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
            <th className="p-4 text-left">Action</th>

          </tr>

        </thead>

        <tbody>

          {tickets.map((ticket) => (

            <tr key={ticket.id} className="border-t">

              <td className="p-4">{ticket.ticket_id}</td>

              <td className="p-4">{ticket.customer_name}</td>

              <td className="p-4">{ticket.subject}</td>

              <td className="p-4">{ticket.status}</td>

              <td className="p-4">

                <Link
                  to={`/ticket/${ticket.id}`}
                  className="text-blue-600 font-semibold"
                >
                  View
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TicketTable;