export const taskSchema = {
  name: 'task',
  properties: {
    _id: 'objectId?',
    assignees: 'string[]',
    assigner: 'string?',
    collab: 'string?',
    completed: 'bool?',
    deadline: 'date?',
    description: 'string?',
    id: 'string?',
    title: 'string?',
  },
  primaryKey: '_id',
};

export const notificationSchema = {
  name: 'notification',
  properties: {
    _id: 'objectId?',
    by: 'string?',
    collab: 'string?',
    data: 'string?',
    date: 'date?',
    for: 'string[]',
  },
  primaryKey: '_id',
};

export const noteSchema = {
  name: 'note',
  properties: {
    _id: 'objectId?',
    collab: 'string?',
    content: 'string?',
    creator: 'string?',
    editing: 'string?',
    id: 'string?',
    title: 'string?',
  },
  primaryKey: '_id',
};

export const eventSchema = {
  name: 'event',
  properties: {
    _id: 'objectId?',
    collab: 'string?',
    date: 'date?',
    description: 'string?',
    duration: 'string?',
    id: 'string?',
    title: 'string?',
    user: 'string?',
  },
  primaryKey: '_id',
};

export const collaborationSchema = {
  name: 'collaboration',
  properties: {
    _id: 'objectId?',
    admins: 'string[]',
    collab: 'string?',
    creator: 'string?',
    name: 'string?',
    notes: {type: 'list',objectType:'collaboration_notes'},
    users: 'string[]',
  },
  primaryKey: '_id',
};

export const collaboration_notesSchema = {
  name: 'collaboration_notes',
  embedded: true,
  properties: {
    creator: 'string?',
    title: 'string?',
  },
};

export const chatSchema = {
  name: 'chat',
  properties: {
    _id: 'objectId?',
    collab: 'string?',
    date: 'date?',
    from: 'string?',
    message: 'string?',
    to: 'string?',
  },
  primaryKey: '_id',
};

export const userSchema = {
  name: 'user',
  properties: {
    _id: 'objectId?',
    collab: 'string?',
    email: 'string?',
    password: 'string?',
    username: 'string?',
  },
  primaryKey: '_id',
};
