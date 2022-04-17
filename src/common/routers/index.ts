import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export default [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      iosIcon: warningOutline,
      mdIcon: warningSharp
    }
  ];