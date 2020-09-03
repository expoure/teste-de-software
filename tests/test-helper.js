import Application from 'teste-de-software/app';
import config from 'teste-de-software/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
