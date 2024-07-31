using { josebecerra_07_a19 as my } from '../db/schema.cds';

@path: '/service/josebecerra_07_a19'
@requires: 'authenticated-user'
service josebecerra_07_a19Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}