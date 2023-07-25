/* arrow function */
/*
const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

const addNeighborhood = (newNeighborhood) => {
  sanFranciscoNeighborhoods.push(newNeighborhood);
  return sanFranciscoNeighborhoods;
};

export default function getNeighborhoodsList () {
  return {
    addNeighborhood
  };
}
*/

export default function getNeighborhoods () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
