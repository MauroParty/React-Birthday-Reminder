const List = (props) => {
  const data = props.data;
  const nData = data.length;
  
  const dbElements = data.map((bd,x) => {
    const style = {
      background: `url(${bd.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }

    return(
      <div
        className="bd-box"
        id={"bd-box-0" + x}
      >
        <div
          className="img-box"
          id={"img-box-0" + x}
          style={style}
        />
        <div 
          className="data-box"
          id={"data-box-0" + x}
        >
          <h3>{bd.name}</h3>
          <p>{bd.age} years</p>
        </div>
      </div>
    )
  });

  return(
    <div id='list-container'>
      <h2>{nData} Birthdays today</h2>
      <div id="bd-list">
        {dbElements}
      </div>
      <button
        id="cl-btn"
        onClick={props.clearAll}
      >Clear All</button>
    </div>
  );
}

export default List;