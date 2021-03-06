/* project_component.jsx */
var Nav_Component = React.createClass({
	render: function(){
		return (
			<div className="nav-container">
				// <div className="row">
				// 	// <Single_Project_Component title={'Finito'} subtitle={'A friendly, easy to use, to-do app to manage your tasks'} url={'http://ajadams.github.io/Adams-ToDo-App/'} />
				// 	// <Single_Project_Component title={'PianoKeys'} subtitle={'A basic representation of a piano with a feature to autoplay the piano'} url={'http://ajadams.github.io/piano-keys/'} />
				// </div>
			</div>
		);
	}
});

var Project_Component = React.createClass({
	render: function(){
		return (
			<div className="col-xs-6 col-xs-offset-3 text-center single">
				<a href={this.props.url}>
					<h2>{this.props.title}</h2>
					<div>{this.props.subtitle}</div>
				</a>
			</div>
		);
	}
});

ReactDOM.render( <Nav_Component />, document.getElementById('nav-container') );