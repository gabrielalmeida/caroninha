Router.map(function() {
    this.route('login', {
        path: '/login',
        template: 'login'
    });

    this.route('messages', {
      path: '/messages',
      template: 'messages'
    });
});

