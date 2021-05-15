const FooterPages = ({ tab, setPage, page, numberOfPages }) => {
  return (
    <footer>
      {page > 6 && <span>...</span>}
      {tab.map((elem, index) => {
        return (
          <button
            className={
              index < page - 6 || index > page + 4
                ? "hidden"
                : index === page - 1
                ? "the-page"
                : "active-pages"
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
      {page < numberOfPages - 5 && <span>...</span>}
    </footer>
  );
};

export default FooterPages;
