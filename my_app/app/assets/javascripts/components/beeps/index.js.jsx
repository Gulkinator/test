Rev.appComponent('Beeps.Index', {
  render: function() {
    return <pre>{JSON.stringify(this.props.beeps)}</pre>;
  }
});