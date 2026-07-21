import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/ticket/:id" element={<TicketDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;