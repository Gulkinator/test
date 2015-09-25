// A good place to put navs, headers, footers that are shared across pages

Rev.appComponent('PageLayout', {
  render: function() {
    return <div>{this.props.children}</div>;
  }
});

