// This is the top of the component tree.
// It's a great place to hook in any behaviors you want for every view.

Rev.appComponent('Main', {
  render: function() {
    // Remove the Router wrapper if you do not need client-side routing.
    return <Rev.Components.Router {...this.props}>
      <Rev.Components.Main {...this.props} />
    </Rev.Components.Router>;
  }
});
