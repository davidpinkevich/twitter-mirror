import bookmarks from 'assets/icons/sidebar/bookmarks.svg';
import explore from 'assets/icons/sidebar/explore.svg';
import home from 'assets/icons/sidebar/home.svg';
import lists from 'assets/icons/sidebar/lists.svg';
import messages from 'assets/icons/sidebar/messages.svg';
import more from 'assets/icons/sidebar/more.svg';
import notifications from 'assets/icons/sidebar/notifications.svg';
import profile from 'assets/icons/sidebar/profile.svg';

const menuItems = [
  { img: home, name: 'Home', path: '/feed' },
  { img: explore, name: 'Explore' },
  { img: notifications, name: 'Notifications' },
  { img: messages, name: 'Messages' },
  { img: bookmarks, name: 'Bookmarks' },
  { img: lists, name: 'Lists' },
  { img: profile, name: 'Profile', path: '/profile' },
  { img: more, name: 'More' },
];

export { menuItems };
