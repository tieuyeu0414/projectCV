// import React, { Component } from 'react';
// import './style.css';

// export default class Admin extends Component {
//     render() {
//         return (
//             <div id="wrapper">
//         <nav className="navbar navbar-default top-navbar" role="navigation">
//           <div className="navbar-header">
//             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//             <a className="navbar-brand" href="index.html"><strong><i className="icon fa fa-plane" /> BRILLIANT</strong></a>
//             <div id="sideNav" href>
//               <i className="fa fa-bars icon" /> 
//             </div>
//           </div>
//           <ul className="nav navbar-top-links navbar-right">
//             <li className="dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
//                 <i className="fa fa-envelope fa-fw" /> <i className="fa fa-caret-down" />
//               </a>
//               <ul className="dropdown-menu dropdown-messages">
//                 <li>
//                   <a href="#">
//                     <div>
//                       <strong>John Doe</strong>
//                       <span className="pull-right text-muted">
//                         <em>Today</em>
//                       </span>
//                     </div>
//                     <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <strong>John Smith</strong>
//                       <span className="pull-right text-muted">
//                         <em>Yesterday</em>
//                       </span>
//                     </div>
//                     <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <strong>John Smith</strong>
//                       <span className="pull-right text-muted">
//                         <em>Yesterday</em>
//                       </span>
//                     </div>
//                     <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a className="text-center" href="#">
//                     <strong>Read All Messages</strong>
//                     <i className="fa fa-angle-right" />
//                   </a>
//                 </li>
//               </ul>
//               {/* /.dropdown-messages */}
//             </li>
//             {/* /.dropdown */}
//             <li className="dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
//                 <i className="fa fa-tasks fa-fw" /> <i className="fa fa-caret-down" />
//               </a>
//               <ul className="dropdown-menu dropdown-tasks">
//                 <li>
//                   <a href="#">
//                     <div>
//                       <p>
//                         <strong>Task 1</strong>
//                         <span className="pull-right text-muted">60% Complete</span>
//                       </p>
//                       <div className="progress progress-striped active">
//                         <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
//                           <span className="sr-only">60% Complete (success)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <p>
//                         <strong>Task 2</strong>
//                         <span className="pull-right text-muted">28% Complete</span>
//                       </p>
//                       <div className="progress progress-striped active">
//                         <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={28} aria-valuemin={0} aria-valuemax={100} style={{width: '28%'}}>
//                           <span className="sr-only">28% Complete</span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <p>
//                         <strong>Task 3</strong>
//                         <span className="pull-right text-muted">60% Complete</span>
//                       </p>
//                       <div className="progress progress-striped active">
//                         <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
//                           <span className="sr-only">60% Complete (warning)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <p>
//                         <strong>Task 4</strong>
//                         <span className="pull-right text-muted">85% Complete</span>
//                       </p>
//                       <div className="progress progress-striped active">
//                         <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
//                           <span className="sr-only">85% Complete (danger)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a className="text-center" href="#">
//                     <strong>See All Tasks</strong>
//                     <i className="fa fa-angle-right" />
//                   </a>
//                 </li>
//               </ul>
//               {/* /.dropdown-tasks */}
//             </li>
//             {/* /.dropdown */}
//             <li className="dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
//                 <i className="fa fa-bell fa-fw" /> <i className="fa fa-caret-down" />
//               </a>
//               <ul className="dropdown-menu dropdown-alerts">
//                 <li>
//                   <a href="#">
//                     <div>
//                       <i className="fa fa-comment fa-fw" /> New Comment
//                       <span className="pull-right text-muted small">4 min</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <i className="fa fa-twitter fa-fw" /> 3 New Followers
//                       <span className="pull-right text-muted small">12 min</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <i className="fa fa-envelope fa-fw" /> Message Sent
//                       <span className="pull-right text-muted small">4 min</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <i className="fa fa-tasks fa-fw" /> New Task
//                       <span className="pull-right text-muted small">4 min</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a href="#">
//                     <div>
//                       <i className="fa fa-upload fa-fw" /> Server Rebooted
//                       <span className="pull-right text-muted small">4 min</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="divider" />
//                 <li>
//                   <a className="text-center" href="#">
//                     <strong>See All Alerts</strong>
//                     <i className="fa fa-angle-right" />
//                   </a>
//                 </li>
//               </ul>
//               {/* /.dropdown-alerts */}
//             </li>
//             {/* /.dropdown */}
//             <li className="dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
//                 <i className="fa fa-user fa-fw" /> <i className="fa fa-caret-down" />
//               </a>
//               <ul className="dropdown-menu dropdown-user">
//                 <li><a href="#"><i className="fa fa-user fa-fw" /> User Profile</a>
//                 </li>
//                 <li><a href="#"><i className="fa fa-gear fa-fw" /> Settings</a>
//                 </li>
//                 <li className="divider" />
//                 <li><a href="#"><i className="fa fa-sign-out fa-fw" /> Logout</a>
//                 </li>
//               </ul>
//               {/* /.dropdown-user */}
//             </li>
//             {/* /.dropdown */}
//           </ul>
//         </nav>
//         {/*/. NAV TOP  */}
//         <nav className="navbar-default navbar-side" role="navigation">
//           <div className="sidebar-collapse">
//             <ul className="nav" id="main-menu">
//               <li>
//                 <a href="index.html"><i className="fa fa-dashboard" /> Dashboard</a>
//               </li>
//               <li>
//                 <a href="ui-elements.html"><i className="fa fa-desktop" /> UI Elements</a>
//               </li>
//               <li>
//                 <a href="#"><i className="fa fa-sitemap" /> Charts<span className="fa arrow" /></a>
//                 <ul className="nav nav-second-level">
//                   <li>
//                     <a href="chart.html">Charts JS</a>
//                   </li>
//                   <li>
//                     <a href="morris-chart.html">Morris Chart</a>
//                   </li>
//                 </ul>
//               </li>	
//               <li>
//                 <a href="tab-panel.html"><i className="fa fa-qrcode" /> Tabs &amp; Panels</a>
//               </li>
//               <li>
//                 <a href="table.html" className="active-menu"><i className="fa fa-table" /> Responsive Tables</a>
//               </li>
//               <li>
//                 <a href="form.html"><i className="fa fa-edit" /> Forms </a>
//               </li>
//               <li>
//                 <a href="#"><i className="fa fa-sitemap" /> Multi-Level Dropdown<span className="fa arrow" /></a>
//                 <ul className="nav nav-second-level">
//                   <li>
//                     <a href="#">Second Level Link</a>
//                   </li>
//                   <li>
//                     <a href="#">Second Level Link</a>
//                   </li>
//                   <li>
//                     <a href="#">Second Level Link<span className="fa arrow" /></a>
//                     <ul className="nav nav-third-level">
//                       <li>
//                         <a href="#">Third Level Link</a>
//                       </li>
//                       <li>
//                         <a href="#">Third Level Link</a>
//                       </li>
//                       <li>
//                         <a href="#">Third Level Link</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="empty.html"><i className="fa fa-fw fa-file" /> Empty Page</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         {/* /. NAV SIDE  */}
//         <div id="page-wrapper">
//           <div className="header"> 
//             <h1 className="page-header">
//               Tables Page <small>Responsive tables</small>
//             </h1>
//             <ol className="breadcrumb">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Tables</a></li>
//               <li className="active">Data</li>
//             </ol> 
//           </div>
//           <div id="page-inner"> 
//             <div className="row">
//               <div className="col-md-12">
//                 {/* Advanced Tables */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Advanced Tables
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table table-striped table-bordered table-hover" id="dataTables-example">
//                         <thead>
//                           <tr>
//                             <th>Rendering engine</th>
//                             <th>Browser</th>
//                             <th>Platform(s)</th>
//                             <th>Engine version</th>
//                             <th>CSS grade</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr className="odd gradeX">
//                             <td>Trident</td>
//                             <td>Internet Explorer 4.0</td>
//                             <td>Win 95+</td>
//                             <td className="center">4</td>
//                             <td className="center">X</td>
//                           </tr>
//                           <tr className="even gradeC">
//                             <td>Trident</td>
//                             <td>Internet Explorer 5.0</td>
//                             <td>Win 95+</td>
//                             <td className="center">5</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="odd gradeA">
//                             <td>Trident</td>
//                             <td>Internet Explorer 5.5</td>
//                             <td>Win 95+</td>
//                             <td className="center">5.5</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="even gradeA">
//                             <td>Trident</td>
//                             <td>Internet Explorer 6</td>
//                             <td>Win 98+</td>
//                             <td className="center">6</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="odd gradeA">
//                             <td>Trident</td>
//                             <td>Internet Explorer 7</td>
//                             <td>Win XP SP2+</td>
//                             <td className="center">7</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="even gradeA">
//                             <td>Trident</td>
//                             <td>AOL browser (AOL desktop)</td>
//                             <td>Win XP</td>
//                             <td className="center">6</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Firefox 1.0</td>
//                             <td>Win 98+ / OSX.2+</td>
//                             <td className="center">1.7</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Firefox 1.5</td>
//                             <td>Win 98+ / OSX.2+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Firefox 2.0</td>
//                             <td>Win 98+ / OSX.2+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Firefox 3.0</td>
//                             <td>Win 2k+ / OSX.3+</td>
//                             <td className="center">1.9</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Camino 1.0</td>
//                             <td>OSX.2+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Camino 1.5</td>
//                             <td>OSX.3+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Netscape 7.2</td>
//                             <td>Win 95+ / Mac OS 8.6-9.2</td>
//                             <td className="center">1.7</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Netscape Browser 8</td>
//                             <td>Win 98SE+</td>
//                             <td className="center">1.7</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Netscape Navigator 9</td>
//                             <td>Win 98+ / OSX.2+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.0</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.1</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.1</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.2</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.2</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.3</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.3</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.4</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.4</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.5</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.5</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.6</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">1.6</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.7</td>
//                             <td>Win 98+ / OSX.1+</td>
//                             <td className="center">1.7</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Mozilla 1.8</td>
//                             <td>Win 98+ / OSX.1+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Seamonkey 1.1</td>
//                             <td>Win 98+ / OSX.2+</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Gecko</td>
//                             <td>Epiphany 2.20</td>
//                             <td>Gnome</td>
//                             <td className="center">1.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>Safari 1.2</td>
//                             <td>OSX.3</td>
//                             <td className="center">125.5</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>Safari 1.3</td>
//                             <td>OSX.3</td>
//                             <td className="center">312.8</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>Safari 2.0</td>
//                             <td>OSX.4+</td>
//                             <td className="center">419.3</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>Safari 3.0</td>
//                             <td>OSX.4+</td>
//                             <td className="center">522.1</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>OmniWeb 5.5</td>
//                             <td>OSX.4+</td>
//                             <td className="center">420</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>iPod Touch / iPhone</td>
//                             <td>iPod</td>
//                             <td className="center">420.1</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Webkit</td>
//                             <td>S60</td>
//                             <td>S60</td>
//                             <td className="center">413</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 7.0</td>
//                             <td>Win 95+ / OSX.1+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 7.5</td>
//                             <td>Win 95+ / OSX.2+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 8.0</td>
//                             <td>Win 95+ / OSX.2+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 8.5</td>
//                             <td>Win 95+ / OSX.2+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 9.0</td>
//                             <td>Win 95+ / OSX.3+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 9.2</td>
//                             <td>Win 88+ / OSX.3+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera 9.5</td>
//                             <td>Win 88+ / OSX.3+</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Opera for Wii</td>
//                             <td>Wii</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Nokia N800</td>
//                             <td>N800</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Presto</td>
//                             <td>Nintendo DS browser</td>
//                             <td>Nintendo DS</td>
//                             <td className="center">8.5</td>
//                             <td className="center">C/A<sup>1</sup>
//                             </td>
//                           </tr>
//                           <tr className="gradeC">
//                             <td>KHTML</td>
//                             <td>Konqureror 3.1</td>
//                             <td>KDE 3.1</td>
//                             <td className="center">3.1</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>KHTML</td>
//                             <td>Konqureror 3.3</td>
//                             <td>KDE 3.3</td>
//                             <td className="center">3.3</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>KHTML</td>
//                             <td>Konqureror 3.5</td>
//                             <td>KDE 3.5</td>
//                             <td className="center">3.5</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeX">
//                             <td>Tasman</td>
//                             <td>Internet Explorer 4.5</td>
//                             <td>Mac OS 8-9</td>
//                             <td className="center">-</td>
//                             <td className="center">X</td>
//                           </tr>
//                           <tr className="gradeC">
//                             <td>Tasman</td>
//                             <td>Internet Explorer 5.1</td>
//                             <td>Mac OS 7.6-9</td>
//                             <td className="center">1</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeC">
//                             <td>Tasman</td>
//                             <td>Internet Explorer 5.2</td>
//                             <td>Mac OS 8-X</td>
//                             <td className="center">1</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Misc</td>
//                             <td>NetFront 3.1</td>
//                             <td>Embedded devices</td>
//                             <td className="center">-</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeA">
//                             <td>Misc</td>
//                             <td>NetFront 3.4</td>
//                             <td>Embedded devices</td>
//                             <td className="center">-</td>
//                             <td className="center">A</td>
//                           </tr>
//                           <tr className="gradeX">
//                             <td>Misc</td>
//                             <td>Dillo 0.8</td>
//                             <td>Embedded devices</td>
//                             <td className="center">-</td>
//                             <td className="center">X</td>
//                           </tr>
//                           <tr className="gradeX">
//                             <td>Misc</td>
//                             <td>Links</td>
//                             <td>Text only</td>
//                             <td className="center">-</td>
//                             <td className="center">X</td>
//                           </tr>
//                           <tr className="gradeX">
//                             <td>Misc</td>
//                             <td>Lynx</td>
//                             <td>Text only</td>
//                             <td className="center">-</td>
//                             <td className="center">X</td>
//                           </tr>
//                           <tr className="gradeC">
//                             <td>Misc</td>
//                             <td>IE Mobile</td>
//                             <td>Windows Mobile 6</td>
//                             <td className="center">-</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeC">
//                             <td>Misc</td>
//                             <td>PSP browser</td>
//                             <td>PSP</td>
//                             <td className="center">-</td>
//                             <td className="center">C</td>
//                           </tr>
//                           <tr className="gradeU">
//                             <td>Other browsers</td>
//                             <td>All others</td>
//                             <td>-</td>
//                             <td className="center">-</td>
//                             <td className="center">U</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/*End Advanced Tables */}
//               </div>
//             </div>
//             {/* /. ROW  */}
//             <div className="row">
//               <div className="col-md-6">
//                 {/*   Kitchen Sink */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Kitchen Sink
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table table-striped table-bordered table-hover">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End  Kitchen Sink */}
//               </div>
//               <div className="col-md-6">
//                 {/*   Basic Table  */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Basic Table
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End  Basic Table  */}
//               </div>
//             </div>
//             {/* /. ROW  */}
//             <div className="row">
//               <div className="col-md-6">
//                 {/*    Striped Rows Table  */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Striped Rows Table
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table table-striped">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/*  End  Striped Rows Table  */}
//               </div>
//               <div className="col-md-6">
//                 {/*    Bordered Table  */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Bordered Table
//                   </div>
//                   {/* /.panel-heading */}
//                   <div className="panel-body">
//                     <div className="table-responsive table-bordered">
//                       <table className="table">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/*  End  Bordered Table  */}
//               </div>
//             </div>
//             {/* /. ROW  */}
//             <div className="row">
//               <div className="col-md-6">
//                 {/*    Hover Rows  */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Hover Rows
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table table-hover">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End  Hover Rows  */}
//               </div>
//               <div className="col-md-6">
//                 {/*    Context Classes  */}
//                 <div className="panel panel-default">
//                   <div className="panel-heading">
//                     Context Classes
//                   </div>
//                   <div className="panel-body">
//                     <div className="table-responsive">
//                       <table className="table">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr className="success">
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr className="info">
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr className="warning">
//                             <td>3</td>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                           <tr className="danger">
//                             <td>4</td>
//                             <td>John</td>
//                             <td>Smith</td>
//                             <td>@jsmith</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/*  end  Context Classes  */}
//               </div>
//             </div>
//             {/* /. ROW  */}
//           </div>
//           <footer><p>All right reserved. Template by: <a href="http://webthemez.com">WebThemez.com</a></p></footer>
//         </div>
//       </div>
//         )
//     }
// }
