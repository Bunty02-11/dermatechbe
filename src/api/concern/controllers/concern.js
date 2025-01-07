'use strict';

/**
 * concern controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::concern.concern');
