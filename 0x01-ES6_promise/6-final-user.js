import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    await signUpUser(firstName, lastName);
    const res = uploadPhoto(fileName);
    return [{ status: 'success', value: res }];
  } catch (err) {
    return [{ status: 'error', value: err }];
  }
}
