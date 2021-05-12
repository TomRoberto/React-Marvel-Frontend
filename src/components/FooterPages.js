const FooterPages = ({ tab, setPage }) => {
  return (
    <div>
      {tab.map((elem, index) => {
        return (
          <button
            onClick={() => {
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default FooterPages;
