/* background_component.jsx */
$.fn.rotate = function(deg){
	$(this).css({'-webkit-transform': 'rotate('+deg+'deg)',
				'-moz-transform': 'rotate('+deg+'deg)',
				'-ms-trasform': 'rotate('+deg+'deg)',
				'trasform': 'rotate('+deg+'deg)'});
	return $(this);
}

var Background_Component = React.createClass({displayName: "Background_Component",
	render: function(){
		return (
			React.createElement("div", {className: "background-layer"}, 
				React.createElement(Clock_Component, null), 
				React.createElement("div", {className: "opaque-layer"})
			)
		);
	}
});

// -- start of Background component
var Clock_Component = React.createClass({displayName: "Clock_Component",
	getInitialState: function(){
		return {

		};
	},

	componentDidMount: function(){
		this.runClock();
	},

	runClock: function(){
		var sec = $('.sec'),
			min = $('.min'),
			hr = $('.hr'),
			rotate_sec = 0,
			rotate_min = 90,
			rotate_hr = 180;

		setInterval(function(){
			sec.rotate(rotate_sec);
			rotate_sec += 6;

			if( rotate_sec === 360 )
				rotate_sec = 0;

		}, 1000);

		setInterval(function(){
			min.rotate(rotate_min);
			rotate_min += 6;

			if( rotate_min === 360 )
				rotate_min = 0;

		}, 60000);

		setInterval(function(){
			hr.rotate(rotate_hr);
			rotate_hr += 6;

			if( rotate_hr === 360 )
				rotate_hr = 0;
		}, 3600000);
	},

	render: function(){
		return (
			React.createElement("div", {className: "clock"}, 
				React.createElement("div", {className: "center"}), 

				React.createElement("div", {className: "hr"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				), 

				React.createElement("div", {className: "min"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				), 

				React.createElement("div", {className: "sec"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				)
			)
		);
	}
});

ReactDOM.render( React.createElement(Background_Component, null), document.getElementById('background-container') );