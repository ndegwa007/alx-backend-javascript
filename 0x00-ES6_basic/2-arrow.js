#!/usr/bin/node
/* arrow function */
const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

const addNeighborhood = (newNeighborhood) => {
  sanFranciscoNeighborhoods.push(newNeighborhood);
  return sanFranciscoNeighborhoods;
};

export default function getNeighborhoodsList() {
  return {
    addNeighborhood,
  };
}
