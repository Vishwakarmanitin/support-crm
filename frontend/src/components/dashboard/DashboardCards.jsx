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
    {
      title: "Total Tickets",
      value: total,
      color: "bg-blue-600",
    },
    {
      title: "Open",
      value: open,
      color: "bg-red-500",
    },
    {
      title: "In Progress",
      value: progress,
      color: "bg-yellow-500",
    },
    {
      title: "Closed",
      value: closed,
      color: "bg-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl shadow-lg p-6`}
        >

          <h2 className="text-lg font-semibold">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );

}

export default DashboardCards;