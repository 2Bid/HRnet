
// custom cell component
const Username = ({
    tableManager,
    value,
    field,
    data,
    column,
    colIndex,
    rowIndex
  }) => {
    return (
      <div
        className="rgt-cell-inner"
        style={{ display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        <img src={data.avatar} alt="user avatar" />
        <span className="rgt-text-truncate" style={{ marginLeft: 10 }}>
          {value}
        </span>
      </div>
    );
};

export const columns = [
    {
      id: 1,
      field: "username",
      label: "Username",
      cellRenderer: Username
    },
    {
      id: 2,
      field: "gender",
      label: "Gender"
    },
    {
      id: 3,
      field: "last_visited",
      label: "Last Visited",
      sort: ({ a, b, isAscending }) => {
        let aa = a.split("/").reverse().join(),
          bb = b.split("/").reverse().join();
        return aa < bb
          ? isAscending
            ? -1
            : 1
          : aa > bb
          ? isAscending
            ? 1
            : -1
          : 0;
      }
    },
    {
      id: 4,
      field: "test",
      label: "Score",
      getValue: ({ value, column }) => value.x + value.y
    }
];