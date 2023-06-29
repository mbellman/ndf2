import { BasicThread } from '../types';
import './thread-list.scss';

interface ThreadPaginationProps {
  position: 'top' | 'bottom';
}

export const ThreadPagination = ({ position }: ThreadPaginationProps) => {
  return (
    <div className={`thread-pagination ${position}`}>
      <button>« Previous</button>
      <button>Next »</button>
    </div>
  )
};

export const ThreadListColumns = () => {
  return (
    <div className="thread-list-columns">
      <div style={{ width: '30px', minWidth: '30px' }}></div>
      <div className="thread--heading" style={{ width: '75%' }}>Subject</div>
      <div className="thread--heading" style={{ width: '10%' }}>Author</div>
      <div className="thread--heading" style={{ width: '2.5%' }}>Replies</div>
      <div className="thread--heading" style={{ width: '2.5%' }}>Views</div>
      <div className="thread--heading" style={{ width: '10%' }}>Date</div>
    </div>
  )
};

interface ThreadProps {
  thread: BasicThread;
}

export const Thread = ({ thread }: ThreadProps) => {
  return (
    <div className="thread">
      <div className="thread--icon" />
      <div className="thread--column" style={{ width: '75%' }}>
        <div className="thread--detail">
          <strong>{thread.title}</strong>
        </div>
        <div className="thread--message">
          {thread.message}...
        </div>
      </div>
      <div className="thread--column" style={{ width: '10%' }}>
        <div className="thread--detail">
          <strong>{thread.author.name}</strong>
        </div>
      </div>
      <div className="thread--column" style={{ width: '2.5%' }}>
        <div className="thread--detail">
          <span>{thread.replies}</span>
        </div>
      </div>
      <div className="thread--column" style={{ width: '2.5%' }}>
        <div className="thread--detail">
          <span>{thread.views}</span>
        </div>
      </div>
      <div className="thread--column" style={{ width: '10%'}}>
        <div className="thread--detail">
          <span>{thread.date.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
};