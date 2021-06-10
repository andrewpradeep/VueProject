
const aboutRoutes = {
	path: '/about',
	name: 'about',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: function () {
		return import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	children : [
		{
			path : "profile",
			name : "profileview",
			component : function ()
			{
				return import(/* webpackChunkName: "about" */'../views/profileViewer')
			}
		},
		{
			path :':owner',
			name : 'aboutowner',
			component : function()
			{
				return import(/* webpackChunkName: "about" */ '../views/AboutOwner.vue')
			},
			props : true
		}
	]
}
export default [aboutRoutes];