import { NavLink } from "react-router";

 export const NavMenu = ({ toggleMenu }) => {
   const navItems = [
     { id: 1, path: '/', label: 'furniture' },
     { id: 2, path: '/shope', label: 'Shope' },
     { id: 3, path: '/about-us', label: 'About-us' },
     { id: 4, path: '/contact-us', label: 'Contact' },
   ];
   return (
     <div>
       <ul className="flex flex-col md:flex-row  md:space-x-8 gap-8 ">
         {navItems.map(item => (
           <li key={item.id} onClick={toggleMenu}>
             <NavLink
               to={item.path}
               className={({ isActive }) =>
                 isActive
                   ? 'text-secondary text-lg font-black capitalize'
                   : 'text-lg font-black capitalize hover:text-secondary'
               }
             >
               {item.label}
             </NavLink>
           </li>
         ))}
       </ul>
     </div>
   );
 };
