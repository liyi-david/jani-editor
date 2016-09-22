// the extension of Jani-Model

joint.shapes.jani = {};

joint.shapes.jani.State = joint.shapes.basic.Generic.extend({
  markup: "<g class='rotatable'><g class='scalable'><rect/></g></g>",
  defaults: _.defaultsDeep({
    type: 'jani.State',
    size: { width: 120, height: 50 },
    attrs: {
      rect: {
        transform: 'translate(10, 10)',
        width: 150,
        height: 70,
        rx: 10,
        ry: 10,
        fill: 'red',
        stroke: 'black',
        'stroke-width': 5,
        opacity: 0.5
      }
    }
  })
});

joint.shapes.jani.InitialState = joint.shapes.jani.State.extend({
  defaults: _.defaultsDeep({
    type: 'jani.InitialState'
  })
});

joint.shapes.jani.Action = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><circle/></g></g>',
    defaults: _.defaultsDeep({
        type: 'jani.Action',
        size: { width: 6, height: 6 },
        attrs: {
            circle: {
                transform: 'translate(10, 10)',
                r: 3,
                fill: '#000000'
            }
        }
      },
      joint.dia.Element.prototype.defaults
    )
});

joint.shapes.jani.ActEdge = joint.dia.Link.extend({

    defaults: _.defaultsDeep({
        type: 'fsa.Arrow',
        attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }},
        smooth: true
    }, joint.dia.Link.prototype.defaults)
});
