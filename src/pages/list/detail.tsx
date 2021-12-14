interface IProps {
    name?: string
  }
  
  const Detail: React.FC<IProps> = (props) => {
    const {name} = props;
    return (
      <div className="App">
        <h1>hello world</h1>
        <h2>{name}</h2>
      </div>
    );
  }
  
  export default Detail;