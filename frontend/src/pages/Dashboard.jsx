import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import DashboardCards from "../components/dashboard/DashboardCards";
import TicketTable from "../components/dashboard/TicketTable";
import SearchBar from "../components/dashboard/SearchBar";
import StatusFilter from "../components/dashboard/StatusFilter";
import ExportButton from "../components/dashboard/ExportButton";
import Loader from "../components/common/Loader";

import api from "../services/api";

function Dashboard() {

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {

    try {

      const response = await api.get("/tickets");

      setTickets(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const filteredTickets = tickets.filter((ticket) => {

    const matchesSearch =
      ticket.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.ticket_id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "" || ticket.status === status;

    return matchesSearch && matchesStatus;

  });

  if (loading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <DashboardCards tickets={filteredTickets} />

      <div className="flex flex-col md:flex-row items-center gap-4 my-6">

        <div className="flex-1 w-full">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <StatusFilter
          status={status}
          setStatus={setStatus}
        />

        <ExportButton
          tickets={filteredTickets}
        />

      </div>

      <TicketTable
        tickets={filteredTickets}
      />

    </MainLayout>

  );

}

export default Dashboard;