import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const array = [];
  return Promise.allSettled(promises).then((results) => {
    results.forEach((result) => {
      array.push(result);
    });
    return array;
  }).catch(() => console.log('err'));
}
