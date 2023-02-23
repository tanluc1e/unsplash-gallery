import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Article({
  id,
  urls,
  user,
  created_at,
  likes,
  alt_description,
}) {
  return (
    <>
      <a href={urls.regular}>
        <img
          className="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
          alt={user.username}
          src={urls.regular}
        />
      </a>
    </>
  );
}
