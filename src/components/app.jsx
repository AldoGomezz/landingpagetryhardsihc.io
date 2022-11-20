export const Aplication = (props) => {
    return (
      <div id="app">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="app-text">
                <h2>Mejora la forma de Alimentarte con nuestra APP inteligente</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
                <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/Dieta.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="app-text">
                <h2>Recetas según tus preferencias</h2>
                <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/Receta.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };