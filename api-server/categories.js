// @ts-check

const clone = require('clone');
const config = require('./config');
const v4 = require('uuid/v4');

let db = {};

const reactId = v4();
const reduxId = v4();

const defaultData = {
  [reactId]: {
    id: reactId,
    name: 'react',
    path: 'react',
    timestamp: new Date(),
    deleted: false,
  },
  [reduxId]: {
    id: reduxId,
    name: 'redux',
    path: 'redux',
    timestamp: new Date(),
    deleted: false,
  },
};

function getData(token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token];
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getAll(token) {
  return new Promise(res => {
    res(getData(token));
  });
}

function add(token, category) {
  const categories = getData(token);
  const { id, name, path, timestamp, deleted } = category;
  categories[id] = {
    id,
    name,
    path,
    timestamp,
    deleted: false,
  };
  return new Promise(res => res(categories[id]));
}

function disable(token, id) {
  return new Promise(res => {
    const categories = getData(token);
    categories[id].deleted = true;
    res(categories[id]);
  });
}

module.exports = { getAll, add, disable };
