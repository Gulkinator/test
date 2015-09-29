// This is just a handy way to attach components to `this`.
// Because we're lazy and don't like typing Rev.Components.ModelInput a bunch.
Rev.pullInto(this)('ModelForm', 'ModelInput');

Rev.appComponent('Beeps.Index', {
  mixins: [Rev.Mixins.BackboneProps],
  backboneMap: {
    beeps: App.Models.BeepCollection
  },

  // Set up our component with a fresh, empty Beep.
  // We pass this to ModelForm and ModelInput.
  getInitialState: function() {
    return {
      newBeep: new App.Models.Beep()
    };
  },

  addToBeeps: function() {
    // Add our new Beep to the beginning of the list.
    this.props.beeps.unshift(this.state.newBeep);
    // Reset the form by giving it a fresh, empty Beep.
    this.setState({ newBeep: new App.Models.Beep() });
  },

  render: function() {
    return <div>
      <ModelForm model={ this.state.newBeep } onSuccess={this.addToBeeps}>
        <ModelInput model={ this.state.newBeep } field="from" label="From:" />
        <ModelInput model={ this.state.newBeep } field="body" label="Message: " />
        <button>Beep beep!</button>
      </ModelForm>
      <ul>
        {
          this.props.beeps.map(function(beep) {
            return <li key={beep.id}>{ beep.get('from') } says: { beep.get('body') }</li>;
          })
        }
      </ul>
    </div>;
  }
});