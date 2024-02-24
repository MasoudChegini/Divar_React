import React from 'react'
import Header from '../organism/Header.org';

function LayoutWithoutSide({children}) {
    return (
        <div>
          <div>
            <Header />
          </div>
          <div className="flex w-full gap-7">
            <div className="w-2/12">
            
            </div>
            <div className="w-full p-5">{children}</div>
          </div>
        </div>
      );
}

export default LayoutWithoutSide