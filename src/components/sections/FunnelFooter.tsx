import { Link } from "react-router-dom";

export const FunnelFooter = () => {
  return (
    <footer className="bg-[#7B8FC7] py-6">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <p className="text-white/80 text-sm">
            Copyrights 2025 | SmartFirm |{" "}
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FunnelFooter;
