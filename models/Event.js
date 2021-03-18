class Event {
  constructor(id, collab, title, date, time, duration, repeat, user) {
    this.id = id;
    this.collab = collab;
    this.title = title;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.repeat = repeat;
    this.user = user;
  }
}

export default Event;
