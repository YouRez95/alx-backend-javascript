import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promises = [createUser(), uploadPhoto()];
  Promise.all(promises).then((values) => {
    console.log(values[1].body, values[0].firstName, values[0].lastName);
  }).catch(() => console.log('Signup system offline'));
}
