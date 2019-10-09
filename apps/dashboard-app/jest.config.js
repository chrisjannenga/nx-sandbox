module.exports = {
  name: 'dashboard-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dashboard-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
