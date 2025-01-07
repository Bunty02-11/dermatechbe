'use strict';

/**
 * concern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concern.concern');
