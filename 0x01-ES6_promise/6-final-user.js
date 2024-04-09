import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((results) => {
    const array = [];
    results.forEach((result) => {
      array.push({ status: result.status, value: result.value || result.reason });
    });
    return array;
  });
}
