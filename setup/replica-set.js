rsconf = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo-rs0-1:40001", priority: 1 },
    { _id: 1, host: "mongo-rs0-2:40001", priority: 0.5 },
    { _id: 2, host: "mongo-rs0-3:40001", priority: 0.5 },
  ],
};

rsconf.members[0].priority = 1;
rsconf.members[1].priority = 0.5;
rsconf.members[2].priority = 0.5;

rs.initiate(rsconf);
rs.conf();
