const FicheComic = ({ photo, name, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={photo} alt="" />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default FicheComic;
