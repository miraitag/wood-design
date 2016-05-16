var MenuPanelItemsSubmenu = React.createClass({
	render : function(){
		console.log( this.props.item.sub);
		return(
			<li>
				<a href="#">{ this.props.item.sub }</a>
			</li>
		);
	}
});


var MenuPanelItems = React.createClass({
	render: function(){
		var submenu;
		var clase;
		if( this.props.item.submenu ){
			submenu = this.props.item.submenu.map(function( submenu ){
				return <MenuPanelItemsSubmenu key = { submenu.sub } item = { submenu } />
			});
			submenu = <ul> { submenu }</ul>
			clase = "wd-menu__panel-content__item submenu";
		}else{
			clase = "wd-menu__panel-content__item";
		}
		return(
			<li className = { clase } >
				<a href="#">{ this.props.item.enlace }</a>
				{ submenu }
			</li>
		)
	}
});

var MenuPanel = React.createClass({
	render : function(){
		var items = this.props.item.map(function( item ){
			return <MenuPanelItems key = { item.enlace } item = { item }/>
		});
		return(
			<section className="wd-menu__panel">
				<ul className="wd-menu__panel-content">
					{ items }
				</ul>
			</section>
		);
	}
});

var MenuTop = React.createClass({
	render : function(){
		return(
			<section className="wd-menu__top">
				<button className="wd-menu__top-trigger">
					<span></span>
				</button>
			</section>
		);
	}
});

var Menu = React.createClass({
	getInitialState : function(){
		return { open : ''}
	},
	openMenu : function(){
		return
	},
	render : function(){
		return(
			<header className="wd-menu">
				<MenuTop open />
				<MenuPanel item = { this.props.items }/>
			</header>
		)
	}
});

var items = [
		{
			enlace: 'option 1',
			submenu : ''
		},{
			enlace: 'option 2',
			submenu : ''
		},{
			enlace: 'option 3',
			submenu : [
					{
						sub : 'sub-option 1'
					},{
						sub : 'sub-option 2'
					},{
						sub : 'sub-option 3'
					}
				]
		},{
			enlace: 'option 4',
			submenu : ''
		},{
			enlace: 'option 5',
			submenu : ''
		}
	]


ReactDOM.render( <Menu items = { items }/>, document.querySelector('.wd-wrapper') );