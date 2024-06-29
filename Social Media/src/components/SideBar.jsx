const SideBar=({selectedTab,sideBarBtn})=>{
 
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px",height:"100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Social Media</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a onClick={sideBarBtn} href="#" className={`nav-link ${selectedTab==="Home" ? "active":"text-white"}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a onClick={sideBarBtn} href="#" className={`nav-link ${selectedTab==="Create Post"?"active":"text-white"}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post 
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>shubham</strong>
      </a>
    </div>
  </div>
}

export default SideBar;