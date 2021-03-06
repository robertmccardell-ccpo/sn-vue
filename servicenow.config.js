const servicenowConfig = {

    /**
     * ServiceNow path to GET resource which serves javascript files
     * Current configuration does not produce CSS files
     * CSS code will be embedded into javascript files
     */
    JS_API_PATH: 'api/x_744337_vue_app/container/js/',
    /**
     * ServiceNow path to GET resource which serves
     * Image files (png, jpg, gif)
     * SVG files will be embedded into javascript files
     */
    IMG_API_PATH: '/api/x_744337_vue_app/container/img/',
    /**
     * ServiceNow path to GET resource which serves
     * other files, like fonts etc.
     */
    ASSETS_API_PATH: '/api/x_744337_vue_app/container/other_assets/',
    /**
     * fonts and images below this size will be put inside
     * JS chunks, instead of being saved as separate files
     */
    ASSET_SIZE_LIMIT: 10000,
  }
  
  module.exports = servicenowConfig