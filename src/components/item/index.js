const Item = ({list}) => {
  return (
    <>
      {list?.results?.map((item) => (
        <h4 key={item.id}>{item.name}</h4>
      ))}
    </>
  );
};

export default Item;
