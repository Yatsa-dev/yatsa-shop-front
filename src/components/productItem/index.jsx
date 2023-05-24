const Item = item => {
  return (
    <div key={item.id}>
      <img src={item.file} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};
export default Item;
