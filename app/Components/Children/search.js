// Require React 
var React = require('react');

var Search = React.createClass({

	render: function(){

		return(
			<div className="container">
				
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Search For Articles </h3>
						</div>
						<div className="panel-body">
		
						<h1> Work</h1>

							{/*This code will allow us to automatically dump the correct GrandChild component
							{this.props.children}*/}
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Search;
