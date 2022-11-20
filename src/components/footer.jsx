export const Footer = (props) => {
  return (
    <div>
      <div id='footer'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/Logo.png" className="img-responsive" alt="" />{" "}
              <h6>Fitfud - Alimentación Inteligente </h6>
            </div>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}