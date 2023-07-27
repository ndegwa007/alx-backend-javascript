import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const body = await uploadPhoto();
    const names = await createUser();
    console.log(body.body, names.firstName, names.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
