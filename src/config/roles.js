const roles = ['student', 'tutor', 'staff','manager', 'admin'];

const roleRights = new Map();

const getPermissionList = [
  'getUser', 'getUsers', 
  'getSubject', 'getSubjects', 
  'getClassroom', 'getClassrooms',
  'getState', 'getStates',
  'getCity', 'getCitys', 'getCityByState',
  'getDashboard', 'getUserProfile',
  'getBranch', 'getBranches',
  'getPackage', 'getPackages',
];
const studentPermissionList = [];
const tutorManagePermissionList = [];
const staffPermissionList = ['manageSubjects', 'manageClassroom'];
const managerPermissionList = ['managePackage', 'manageBranch', 'manageUsers'];
const adminManagePermissionList = ['manageState', 'manageCity'];

roleRights.set(roles[0], studentPermissionList.concat(getPermissionList));
roleRights.set(roles[1], tutorManagePermissionList.concat(getPermissionList, studentPermissionList));
roleRights.set(roles[2], staffPermissionList.concat(getPermissionList, staffPermissionList));
roleRights.set(roles[3], managerPermissionList.concat(getPermissionList, staffPermissionList, managerPermissionList));
roleRights.set(roles[4], adminManagePermissionList.concat(getPermissionList, studentPermissionList, tutorManagePermissionList, managerPermissionList));

module.exports = {
  roles,
  roleRights,
};