export function initialize(container, application) {
  application.inject('route', 'parse', 'service:parse');
  application.inject('controller', 'parse', 'service:parse');}

export default {
  name: 'parse-service',
  initialize: initialize
};
