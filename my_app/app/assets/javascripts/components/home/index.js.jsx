// Exports Rev.Components.<whatever> into the `this` context for convenience.
// This is is not strictly necessary.
// You could just use Rev.Components.Col, etc. directly if you enjoy typing.
Rev.pullInto(this)('Row', 'Col', 'CodeBlock', 'Lipsum');

Rev.appComponent('Home.Index', {
  render: function() {
    return <App.Components.PageLayout>
      <Row>
        <Col>
          <h1>
            Find this React component in...
          </h1>
        </Col>
        <Col>
          <p><CodeBlock>app/assets/javascripts/components/home/index.js.jsx</CodeBlock></p>
        </Col>
      </Row>
      <Row>
        <Col medium={4}><Lipsum /></Col>
        <Col medium={8}><Lipsum p={2} /></Col>
      </Row>
    </App.Components.PageLayout>;
  }
});

