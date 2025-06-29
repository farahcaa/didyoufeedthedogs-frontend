import { Button } from "../ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-2">
      <div className="flex flex-row items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrHP5vcQ68zEjqIu-ItEbapI0Bq11DHtidg&s"
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        <Button
          variant="link"
          size="sm"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="p-4 text-sm font-bold">Did You Feed The Dogs?</div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
