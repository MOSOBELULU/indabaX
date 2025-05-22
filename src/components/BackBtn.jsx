import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackBtn({ label = "Go Back", className =""}) {
const navigate = useNavigate();

return (
    <button
    onClick={() => navigate(-1)}
    className={`flex items-center text-sm text-green hover:underline ${className}`}
    >
        <ArrowLeft className="w-4 h-5" />
        {label}
    </button>
)
}