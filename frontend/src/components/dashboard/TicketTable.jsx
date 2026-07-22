import { Link } from "react-router-dom";

function TicketTable({ tickets }) {
  return (
    <div className="mt-8">
      <div className="w-full overflow-x-auto rounded-xl shadow bg-white">
        <table className="w-full min-w-max border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left whitespace-nowrap">
                Ticket ID
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Customer
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Subject
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Status
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Created
              </th>

              <th className="p-4 text-left whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No Tickets Found
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t hover:bg-gray-50"
                >
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

                  <td className="p-4 whitespace-nowrap text-sm text-gray-600">
                    {ticket.created_at}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <Link
                      to={`/ticket/${ticket.id}`}
                      className="text-blue-600 hover:underline font-medium"
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
    </div>
  );
}

export default TicketTable;
