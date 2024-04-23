import { Link } from "react-router-dom";

function EventCard({ $id, title }) {
  return (
    <Link to={`/event/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default EventCard;
