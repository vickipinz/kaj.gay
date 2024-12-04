// @ts-check

/**
 * @param {import("@11ty/eleventy").UserConfig} config
 */
export default async function (config) {
  config.addPassthroughCopy({'static/images': 'images'});
  config.addPassthroughCopy({'static/css': 'css'});

  config.setInputDirectory('src');
  config.setIncludesDirectory('includes');
  config.setLayoutsDirectory('includes/layouts');

  config.addLayoutAlias('default', 'default.njk');
}