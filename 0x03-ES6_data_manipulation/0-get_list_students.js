export default function getListStudents() {
  const profile = [
    { id: 1, name: 'Guillaume', location: 'San Francisco' },
    { id: 2, name: 'James', location: 'Columbia' },
    { id: 5, name: 'Serena', location: 'San Francisco' },
  ];
  const res = [];
  profile.map((student) => res.push(student));
  return res;
}
