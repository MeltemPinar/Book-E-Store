import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoşgeldiniz!</h1>
      <img src={"/images/welcome.gif"} className="img-fluid rounded" />
      <p>
        <Link to={"/Products"}>Products Page</Link> Yeni çıkan bütün kitaplara
        ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
