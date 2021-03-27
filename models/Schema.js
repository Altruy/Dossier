export const UserSchema = 
{
  "title": "user",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "email": {
      "bsonType": "string"
    },
    "password": {
      "bsonType": "string"
    },
    "username": {
      "bsonType": "string"
    }
  }
}


export const NoteSchema = {
  "title": "note",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "collab": {
      "bsonType": "string"
    },
    "content": {
      "bsonType": "string"
    },
    "creator": {
      "bsonType": "string"
    },
    "editing": {
      "bsonType": "string"
    },
    "tite": {
      "bsonType": "string"
    }
  }
}


export const CollabSchema = {
  "title": "collaboration",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "admins": {
      "bsonType": "array",
      "items": {
        "bsonType": "string"
      }
    },
    "collab": {
      "bsonType": "string"
    },
    "creator": {
      "bsonType": "string"
    },
    "name": {
      "bsonType": "string"
    },
    "notes": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "creator": {
            "bsonType": "string"
          },
          "title": {
            "bsonType": "string"
          }
        }
      }
    },
    "users": {
      "bsonType": "array",
      "items": {
        "bsonType": "string"
      }
    }
  }
}


export const TaskSchema = 
{
    "tasks": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "assignees": {
            "bsonType": "array",
            "items": {
              "bsonType": "string"
            }
          },
          "assigner": {
            "bsonType": "string"
          },
          "completed": {
            "bsonType": "bool"
          },
          "deadline": {
            "bsonType": "string"
          },
          "description": {
            "bsonType": "string"
          },
          "title": {
            "bsonType": "string"
          }
        }
      }
    },
}


export const NottificationSchema = {
  "title": "notification",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "by": {
      "bsonType": "string"
    },
    "collab": {
      "bsonType": "string"
    },
    "data": {
      "bsonType": "string"
    },
    "date": {
      "bsonType": "date"
    },
    "for": {
      "bsonType": "array",
      "items": {
        "bsonType": "string"
      }
    }
  }
}

export const EventSchema = {
  "title": "event",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "collab": {
      "bsonType": "string"
    },
    "date": {
      "bsonType": "date"
    },
    "duration": {
      "bsonType": "string"
    },
    "title": {
      "bsonType": "string"
    },
    "user": {
      "bsonType": "string"
    }
  }
}

export const ChatSchema = {
    "title": "chat",
    "properties": {
      "_id": {
        "bsonType": "objectId"
      },
      "collab": {
        "bsonType": "string"
      },
      "date": {
        "bsonType": "date"
      },
      "from": {
        "bsonType": "string"
      },
      "message": {
        "bsonType": "string"
      },
      "to": {
        "bsonType": "string"
      }
    }
  }

  

