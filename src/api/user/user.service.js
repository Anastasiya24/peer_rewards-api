import { User } from '../../models/user.model';

async function getUserInfo(id) {
  if (id && id !== 'null') {
    let user = await User.findById(id);
    return user;
  }
  return {};
}

export default {
  getUserInfo,
};
