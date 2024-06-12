module.exports = {
  ci:{
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 1,
      url: [
        'http://127.0.0.1:3000/',
        'http://127.0.0.1:3000/about',
        'http://127.0.0.1:3000/project'
      ]
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
