import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as urlLight from './../../assets/app-assets/images/logo/robust-logo-light.png' ;
import * as urlSmall from './../../assets/app-assets/images/logo/robust-logo-small.png' ;
import * as avatarUrl from './../../assets/app-assets/images/portrait/small/avatar-s-1.png';
import * as avatarUrl2 from './../../assets/app-assets/images/portrait/small/avatar-s-2.png';
import * as avatarUrl6 from './../../assets/app-assets/images/portrait/small/avatar-s-6.png';

class NavBar extends Component{
	constructor(props){
		super(props);
		this.clicked = false;
		
	}
    render(){
        return(
                
<nav className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow">
	<div className="navbar-wrapper">
		<div className="navbar-header">
			<ul className="nav navbar-nav">
				<li className="nav-item mobile-menu hidden-md-up float-xs-left">
					<a className="nav-link nav-menu-main menu-toggle hidden-xs">
						<i className="icon-menu5 font-large-1"></i>
					</a>
				</li>
				<li className="nav-item">
					<Link to="/s" className="navbar-brand nav-link">
						<img id="imgLogo" alt="branding logo"  src="./../../assets/app-assets/images/logo/robust-logo-light.png"
						 data-expand="./../../assets/app-assets/images/logo/robust-logo-light.png" 
						 data-collapse="./../../assets/app-assets/images/logo/robust-logo-small.png" 
						 className="brand-logo"></img>
						</Link>
					</li>
					<li className="nav-item hidden-md-up float-xs-right">
						<a data-toggle="collapse" data-target="#navbar-mobile" className="nav-link open-navbar-container">
							<i className="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="navbar-container content container-fluid">
				<div id="navbar-mobile" className="collapse navbar-toggleable-sm">
					<ul className="nav navbar-nav">
						<li className="nav-item hidden-sm-down">
							<a className="nav-link nav-menu-main menu-toggle hidden-xs">
								<i className="icon-menu5" onClick={()=>
								{
									var img = document.getElementById("imgLogo");
									if(this.clicked===true)
										img.src = "./../../assets/app-assets/images/logo/robust-logo-light.png";
									else
										img.src = "./../../assets/app-assets/images/logo/robust-logo-small.png";
									this.clicked = !this.clicked;
								}}></i>
							</a>
						</li>
						<li className="nav-item hidden-sm-down">
							<Link to="#" className="nav-link nav-link-expand">
								<i className="ficon icon-expand2"></i>
							</Link>
						</li>
						<li className="nav-item hidden-sm-down">
							<Link to="https://pixinvent.com/bootstrap-admin-template/robust/" target="_blank" className="btn btn-success upgrade-to-pro">Upgrade to PRO $24</Link>
						</li>
					</ul>
					<ul className="nav navbar-nav float-xs-right">
						<li className="dropdown dropdown-language nav-item">
							<a id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link">
								<i className="flag-icon flag-icon-gb"></i>
								<span className="selected-language">English</span>
							</a>
							<div aria-labelledby="dropdown-flag" className="dropdown-menu">
								<Link to="#" className="dropdown-item">
									<i className="flag-icon flag-icon-gb"></i> English
								</Link>
								<Link to="#" className="dropdown-item">
									<i className="flag-icon flag-icon-fr"></i> French
								</Link>
								<Link to="#" className="dropdown-item">
									<i className="flag-icon flag-icon-cn"></i> Chinese
								</Link>
								<Link to="#" className="dropdown-item">
									<i className="flag-icon flag-icon-de"></i> German
								</Link>
							</div>
						</li>
						<li className="dropdown dropdown-notification nav-item">
							<Link to="#" data-toggle="dropdown" className="nav-link nav-link-label">
								<i className="ficon icon-bell4"></i>
								<span className="tag tag-pill tag-default tag-danger tag-default tag-up">5</span>
							</Link>
							<ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
								<li className="dropdown-menu-header">
									<h6 className="dropdown-header m-0">
										<span className="grey darken-2">Notifications</span>
										<span className="notification-tag tag tag-default tag-danger float-xs-right m-0">5 New</span>
									</h6>
								</li>
								<li className="list-group scrollable-container">
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left valign-middle">
												<i className="icon-cart3 icon-bg-circle bg-cyan"></i>
											</div>
											<div className="media-body">
												<h6 className="media-heading">You have new order!</h6>
												<p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p>
												<small>
													<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">30 minutes ago</time>
												</small>
											</div>
										</div>
									</Link>
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left valign-middle">
												<i className="icon-monitor3 icon-bg-circle bg-red bg-darken-1"></i>
											</div>
											<div className="media-body">
												<h6 className="media-heading red darken-1">99% Server load</h6>
												<p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p>
												<small>
													<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Five hour ago</time>
												</small>
											</div>
										</div>
									</Link>
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left valign-middle">
												<i className="icon-server2 icon-bg-circle bg-yellow bg-darken-3"></i>
											</div>
											<div className="media-body">
												<h6 className="media-heading yellow darken-3">Warning notifixation</h6>
												<p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p>
												<small>
													<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time>
												</small>
											</div>
										</div>
									</Link>
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left valign-middle">
												<i className="icon-check2 icon-bg-circle bg-green bg-accent-3"></i>
											</div>
											<div className="media-body">
												<h6 className="media-heading">Complete the task</h6>
												<small>
													<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last week</time>
												</small>
											</div>
										</div>
									</Link>
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left valign-middle">
												<i className="icon-bar-graph-2 icon-bg-circle bg-teal"></i>
											</div>
											<div className="media-body">
												<h6 className="media-heading">Generate monthly report</h6>
												<small>
													<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last month</time>
												</small>
											</div>
										</div>
									</Link>
								</li>
								<li className="dropdown-menu-footer">
									<Link to="javascript:void(0)" className="dropdown-item text-muted text-xs-center">Read all notifications</Link>
								</li>
							</ul>
						</li>
						<li className="dropdown dropdown-notification nav-item">
							<Link to="#" data-toggle="dropdown" className="nav-link nav-link-label">
								<i className="ficon icon-mail6"></i>
								<span className="tag tag-pill tag-default tag-info tag-default tag-up">8</span>
							</Link>
							<ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
								<li className="dropdown-menu-header">
									<h6 className="dropdown-header m-0">
										<span className="grey darken-2">Messages</span>
										<span className="notification-tag tag tag-default tag-info float-xs-right m-0">4 New</span>
									</h6>
								</li>
								<li className="list-group scrollable-container">
									<Link to="javascript:void(0)" className="list-group-item">
										<div className="media">
											<div className="media-left">
												<span className="avatar avatar-sm avatar-online rounded-circle">
													<img src={avatarUrl} alt="avatar"></img>
														<i></i>
													</span>
												</div>
												<div className="media-body">
													<h6 className="media-heading">Margaret Govan</h6>
													<p className="notification-text font-small-3 text-muted">I like your portfolio, let's start the project.</p>
													<small>
														<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time>
													</small>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0)" className="list-group-item">
											<div className="media">
												<div className="media-left">
													<span className="avatar avatar-sm avatar-busy rounded-circle">
														<img src="../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar"></img>
															<i></i>
														</span>
													</div>
													<div className="media-body">
														<h6 className="media-heading">Bret Lezama</h6>
														<p className="notification-text font-small-3 text-muted">I have seen your work, there is</p>
														<small>
															<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Tuesday</time>
														</small>
													</div>
												</div>
											</Link>
											<Link to="javascript:void(0)" className="list-group-item">
												<div className="media">
													<div className="media-left">
														<span className="avatar avatar-sm avatar-online rounded-circle">
															<img src={avatarUrl2} alt="avatar"></img>
																<i></i>
															</span>
														</div>
														<div className="media-body">
															<h6 className="media-heading">Carie Berra</h6>
															<p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p>
															<small>
																<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Friday</time>
															</small>
														</div>
													</div>
												</Link>
												<Link to="javascript:void(0)" className="list-group-item">
													<div className="media">
														<div className="media-left">
															<span className="avatar avatar-sm avatar-away rounded-circle">
																<img src={avatarUrl6} alt="avatar"></img>
																	<i></i>
																</span>
															</div>
															<div className="media-body">
																<h6 className="media-heading">Eric Alsobrook</h6>
																<p className="notification-text font-small-3 text-muted">We have project party this saturday night.</p>
																<small>
																	<time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">last month</time>
																</small>
															</div>
														</div>
													</Link>
												</li>
												<li className="dropdown-menu-footer">
													<Link to="javascript:void(0)" className="dropdown-item text-muted text-xs-center">Read all messages</Link>
												</li>
											</ul>
										</li>
										<li className="dropdown dropdown-user nav-item">
											<Link to="#" data-toggle="dropdown" className="dropdown-toggle nav-link dropdown-user-link">
												<span className="avatar avatar-online">
													<img src={avatarUrl} alt="avatar"></img>
														<i></i>
													</span>
													<span className="user-name">John Doe</span>
												</Link>
												<div className="dropdown-menu dropdown-menu-right">
													<Link to="#" className="dropdown-item">
														<i className="icon-head"></i> Edit Profile
													</Link>
													<Link to="#" className="dropdown-item">
														<i className="icon-mail6"></i> My Inbox
													</Link>
													<Link to="#" className="dropdown-item">
														<i className="icon-clipboard2"></i> Task
													</Link>
													<Link to="#" className="dropdown-item">
														<i className="icon-calendar5"></i> Calender
													</Link>
													<div className="dropdown-divider"></div>
													<Link to="#" className="dropdown-item">
														<i className="icon-power3"></i> Logout
													</Link>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</nav>
        )
    }
}


export default NavBar;