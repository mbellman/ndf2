import { PropsWithChildren } from 'react';
import './Frame.scss';

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className="frame">
      <div className="frame--glass" />
      {children}
    </div>
  )
};

export default Frame;
