import { Link } from "react-router-dom";

function LearnMore({ toLink }) {
  return (
    <button className="text-black bg-[#F1F6F9] px-2 py-1  rounded-md">
      <Link to={toLink}>Learn more...</Link>
    </button>
  );
}

export default LearnMore;
