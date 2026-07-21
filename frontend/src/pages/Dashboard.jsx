import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import DashboardCards from "../components/dashboard/DashboardCards";
import TicketTable from "../components/dashboard/TicketTable";

import api from "../services/api";

function Dashboard() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    try {

      const response = await api.get("/tickets");

      setTickets(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <MainLayout>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <DashboardCards tickets={tickets} />

      <TicketTable tickets={tickets} />

    </MainLayout>

  );

}

export default Dashboard;