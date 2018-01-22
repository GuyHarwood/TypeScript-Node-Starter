module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      { pattern: 'src/public/**/*.ts', ignore: true }
    ],

    tests: [
      'test/*.ts'
    ]
  };
};