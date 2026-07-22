import Papa from "papaparse";

function ExportButton({ tickets }) {
  const exportCSV = () => {
    const csvData = tickets.map((ticket) => ({
      "Ticket ID": ticket.ticket_id,
      Customer: ticket.customer_name,
      Email: ticket.customer_email,
      Subject: ticket.subject,
      Status: ticket.status,
      Created: ticket.created_at,
    }));

    const csv = Papa.unparse(csvData);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute("download", "support_tickets.csv");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportCSV}
      className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}

export default ExportButton;