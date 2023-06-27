import { PropsWithChildren } from 'react';
import './ForumPage.scss';

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className="frame">
      <div className="frame--glass" />
      {children}
    </div>
  )
};

interface Thread {
  title: string;
  author: string;
  replies: number;
  date: Date;
}

interface ThreadProps {
  thread: Thread;
}

const Thread = ({ thread }: ThreadProps) => {
  return (
    <div className="thread">
      <div className="thread--icon-container">
        <div className="thread--icon" />
      </div>
      <div className="thread--title-container">
        <div className="thread--title">
          {thread.title}
        </div>
      </div>
      <div className="thread--meta-container">
        <div className="thread--meta">
          {thread.author} | {thread.replies} | {thread.date.toLocaleDateString()}
        </div>
      </div>
    </div>
  )
};

const ForumHeader = () => {
  return (
    <div className="forum-header">
      <Frame>

      </Frame>
    </div>
  )
};

const ForumBody = () => {
  const threads: Thread[] = [
    { title: 'Test thread', author: 'L9', replies: 9, date: new Date() },
    { title: 'Test thread', author: 'BNet', replies: 8, date: new Date() },
    { title: 'Test thread', author: 'Amir25atw', replies: 4, date: new Date() },
    { title: 'Test thread', author: 'Punisher2', replies: 16, date: new Date() }
  ]

  return (
    <section className="forum-body">
      <Frame>
        <div className="forum-body--options">
          <button className="create-button">
            +
          </button>
        </div>
        <div className="forum-body--threads">
          {threads.map(thread => (
            <Thread thread={thread} />
          ))}
        </div>
      </Frame>
    </section>
  )
};

const ForumPage = () => {
  return (
    <div className="forum-page">
      <ForumHeader />
      <ForumBody />
    </div>
  )
};

export default ForumPage;