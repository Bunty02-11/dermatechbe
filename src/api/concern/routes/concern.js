'use strict';

/**
 * concern router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::concern.concern');
