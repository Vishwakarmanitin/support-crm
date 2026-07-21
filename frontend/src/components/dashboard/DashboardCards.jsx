function DashboardCards({ tickets }) {

  const total = tickets.length;

  const open = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const progress = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const closed = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  const cards = [
    { title: "Total Tickets", value: total },
    { title: "Open", value: open },
    { title: "In Progress", value: progress },
    { title: "Closed", value: closed },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-gray-500">{card.title}</h2>

          <p className="text-4xl font-bold mt-2">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;