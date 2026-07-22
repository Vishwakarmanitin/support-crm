import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <ClipLoader
        color="#2563eb"
        size={50}
      />
    </div>
  );
}

export default Loader;