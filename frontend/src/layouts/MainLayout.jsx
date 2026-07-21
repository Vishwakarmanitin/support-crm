import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </>
  );
}

export default MainLayout;