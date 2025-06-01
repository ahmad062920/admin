// import React from 'react';
// import { Link } from 'react-router-dom';
// import { DEFAULT_PATHS } from 'config.js';

// const NavLogo = () => {
//   return (
//     <div className="logo position-relative">
//       <Link to={DEFAULT_PATHS.APP}>
//         {/*
//           Logo can be added directly
//           <img src="/img/logo/logo-white.svg" alt="logo" />
//           Or added via css to provide different ones for different color themes
//          */}
//         <div className="img" />
//       </Link>
//     </div>
//   );
// };
// export default React.memo(NavLogo);

import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';

const NavLogo = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Link to={DEFAULT_PATHS.APP}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src="/img/logo/white_logo.png" // <-- image controls its own size
            alt="logo"
            style={{
              display: 'block',
              width: 'auto',
              height: 'auto',
              maxWidth: '55%',
              maxHeight: '100%',
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default React.memo(NavLogo);
