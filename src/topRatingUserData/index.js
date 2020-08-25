import userHandles from './userHandles';

let url = `https://codeforces.com/api/user.info?handles=${userHandles[0]}`;

for (let i = 1; i < userHandles.length; ++i) url = `${url};${userHandles[i]}`;

export default url;