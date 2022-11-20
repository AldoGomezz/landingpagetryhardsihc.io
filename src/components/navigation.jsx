export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            FitFud
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#app' className='page-scroll'>
                APP
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Equipo
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Planes
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
