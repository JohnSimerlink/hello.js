// Amazon
// Amazon services
(function(hello) {

	var HYDRA_BASE = 'http://lvh.me:4444/'
	hello.init({
		hydra: {
			name: 'Hydra',
			oauth: {
				version: 2,
				auth: `${HYDRA_BASE}oauth2/auth`,
				grant: `${HYDRA_BASE}oauth2/token`,
			},
			// Refresh the access_token once expired
			refresh: true,
			scope: {
				basic: 'openid profile offline_access offline'
			},
			scope_delim: ' ',
			login: function(p) {
				p.options.popup.width = 710;
			},

			base: 'http://lvh.me',

			get: {
				me: 'user/profile'
			},
			wrap: {
				me: function(o, headers) {}
			}
		}
	});
})(hello);
