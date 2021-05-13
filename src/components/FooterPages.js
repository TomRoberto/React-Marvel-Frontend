const FooterPages = ({ tab, setPage, page }) => {
  return (
    <div>
      {page > 6 && <span>...</span>}
      {tab.map((elem, index) => {
        return (
          <button
            className={
              index < page - 6 || index > page + 4 ? "hidden" : "active-pages"
            }
            key={index}
            onClick={() => {
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
      {page < 10 && <span>...</span>}
    </div>
  );
};

export default FooterPages;
