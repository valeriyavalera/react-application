import React from "react";
import './style.css';
import MenuItem from "./menu-item";

function Navigation () {
 const menu = [
  { text: 'HOMEPAGE' },
  {
   text: 'PAGES',
   items: [
    { text: 'Full Width Content' },
    { text: 'Content + Left Sidebar' },
    { text: 'Content + Right Sidebar' },
    { text: 'Content + Both Sidebar' },
    { text: 'Contact' },
    { text: '404' },
    { text: 'Testimonials' },
    { text: 'About Us' },
    { text: 'Team Member' },
    { text: 'FAQ' }
   ]
  },
  {
   text: 'ELEMENTS',
   items: [
    { text: 'Buttons' },
    { text: 'Alert Messages' },
    { text: 'Font Icons' },
    { text: 'Call Tos Action' },
    { text: 'Columns' },
    { text: 'Columns - No Gutter' },
    { text: 'Lists' },
    { text: 'Accordions' },
    { text: 'Tabs' },
    { text: 'Toggles' },
    { text: 'Pricing Tables' },
   ]
  },
  {
    text:'PORTFOLIO LAYOUTS',
    items:[
      { text: 'Full Width Portfolio' },
      { text: '2 Column Grid' },
      { text: '2 Col. Grid + Left Sidebar' },
      { text: '2 Col. Grid + Right Sidebar' },
      { text: '2 Col. Grid + Both Sidebars' },
      { text: '3 Column Grid' },
      { text: '3 Col. Grid + Left Sidebar' },
      { text: '3 Col. Grid + Right Sidebar' },
      { text: '3 Col. Grid + Both  Sidebar' },
      { text: '4 Column Grid' },
     ]
  },
  {
    text:'GALLERY LAYOUTS',
    items:[
      { text: 'Full Width Portfolio' },
      { text: '2 Column Grid' },
      { text: '2 Col. Grid + Left Sidebar' },
      { text: '2 Col. Grid + Right Sidebar' },
      { text: '2 Col. Grid + Both Sidebars' },
      { text: '3 Column Grid' },
      { text: '3 Col. Grid + Left Sidebar' },
      { text: '3 Col. Grid + Right Sidebar' },
      { text: '3 Col. Grid + Both  Sidebar' },
      { text: '4 Column Grid' },
     ]
  },
  {text:'LINK TEXT'},
  {text:'A VERY LONG LINK TEXT'}
 ];
 return (
  <header>
   {
    menu.map(elem => <MenuItem elem={elem} />)
   }
  </header>
 );
}

export default Navigation;