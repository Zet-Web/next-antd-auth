import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // показываем только если пользователь авторизован
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark ">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">
          Профиль
        </NavLink>
        <a onClick={logout} className="nav-item nav-link">
          Выйти
        </a>
      </div>
    </nav>
  );
}
