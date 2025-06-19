import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

export default function BackBtn({ className =""}) {
const navigate = useNavigate();

return (
    <button
    onClick={() => navigate(-1)}
    className={`flex items-center text-sm hover:underline ${className}`}
    >
        <ArrowLeftCircle className="w-10 h-10" />
        
    </button>
)
}