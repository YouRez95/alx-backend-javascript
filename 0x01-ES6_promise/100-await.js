import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const responseUser = await createUser();
    const responsePhoto = await uploadPhoto();
    return {
      photo: responsePhoto,
      user: responseUser,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
