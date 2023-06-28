import { PropsWithChildren } from 'react';
import { Thread, ThreadListColumns } from './forum-page/thread-list';
import { BasicThread } from './types';
import './ForumPage.scss';

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className="frame">
      <div className="frame--glass" />
      {children}
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
  const threads: BasicThread[] = [
    {
      title: 'Test thread',
      message: 'Let us see what this thread says',
      author: {
        name: 'L9',
        points: 105245
      },
      replies: 9,
      views: 17,
      date: new Date()
    },
    {
      title: 'Here is the topic of this thread',
      message: 'Let us see what this thread says',
      author: {
        name: 'BNet',
        points: 105245
      },
      replies: 2,
      views: 7,
      date: new Date()
    },
    {
      title: 'What do you think this thread is about?',
      message: 'Let us see what this thread says',
      author: {
        name: 'Amir25atw',
        points: 105245
      },
      replies: 9,
      views: 130,
      date: new Date()
    },
    {
      title: 'NDForums 2.0 is now officially in business',
      message: 'Let us see what this thread says',
      author: {
        name: 'Punisher2',
        points: 105245
      },
      replies: 9,
      views: 41,
      date: new Date()
    }
  ]

  return (
    <section className="forum-body">
      <Frame>
        <div className="forum-body--options">
          <button className="create-button">
            New Thread
          </button>
        </div>
        <div className="forum-body--threads">
          <ThreadListColumns />
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