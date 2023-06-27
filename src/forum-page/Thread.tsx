import { PostPreview } from '../types';
import './Thread.scss';

interface ThreadProps {
  thread: PostPreview;
}

const Thread = ({ thread }: ThreadProps) => {
  return (
    <div className="thread">
      <div className="thread--icon-container">
        <div className="thread--icon" />
      </div>
      <div className="thread--content-container">
        <div className="thread--title">
          {thread.title}
        </div>
        <div className="thread--message">
          {thread.message}...
        </div>
      </div>
      <div className="thread--meta-container">
        <div className="thread--meta">
          <span>{thread.author.name}</span>
          <span>{thread.date.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
};

export default Thread;
