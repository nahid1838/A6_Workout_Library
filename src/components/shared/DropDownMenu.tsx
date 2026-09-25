"use client";

type SortType = "duration" | "calories" | "rating";

interface DropDownMenuProps {
  sortType: SortType;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

const DropDownMenu = ({
  sortType,
  setSortType,
}: DropDownMenuProps) => {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-gray-300">Sort By</p>

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-gray-700 rounded-xl px-5 border border-gray-400"
        >
          {sortType === "duration" && "Duration"}
          {sortType === "calories" && "Calories"}
          {sortType === "rating" && "Rating"}
        </div>

        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-gray-800 border border-gray-400 rounded-xl z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button onClick={() => setSortType("duration")}>
              Duration
            </button>
          </li>

          <li>
            <button onClick={() => setSortType("calories")}>
              Calories
            </button>
          </li>

          <li>
            <button onClick={() => setSortType("rating")}>
              Rating
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;